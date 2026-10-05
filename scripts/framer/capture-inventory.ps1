param([Parameter(Mandatory = $true)][ValidatePattern('^\d+$')][string]$Session)
$ErrorActionPreference = 'Stop'
$repoRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..'))
$captureScript = Join-Path $PSScriptRoot 'export-inventory.js'
$outputFile = Join-Path $repoRoot 'docs\framer\source-inventory.json'
Push-Location -LiteralPath $repoRoot
try {
    $sessionOutput = & npx '@framer/agent@latest' session list
    if ($LASTEXITCODE -ne 0) { throw 'Cannot verify Framer session; existing snapshot preserved.' }
    $sessions = ($sessionOutput -join [Environment]::NewLine) | ConvertFrom-Json
    $activeSession = $sessions | Where-Object { $_.id -eq $Session }
    if ($activeSession.projectId -ne 'F3868vuk7YeE7pDEgpP6') { throw 'Session belongs to a different project or is unavailable.' }
    $captureOutput = & npx '@framer/agent@latest' exec -s $Session -f $captureScript
    if ($LASTEXITCODE -ne 0) { throw "Framer capture failed (exit $LASTEXITCODE). Existing snapshot preserved." }
    $captureJson = $captureOutput -join [Environment]::NewLine
    $captureData = $captureJson | ConvertFrom-Json
    if ($captureData.schemaVersion -ne 1 -or $captureData.sourceProjectId -ne 'F3868vuk7YeE7pDEgpP6' -or $captureData.readOnly -ne $true) {
        throw 'Unexpected capture identity/schema; existing snapshot preserved.'
    }
    if ($captureData.pages.Count -eq 0) { throw 'No pages captured; existing snapshot preserved.' }
    [IO.Directory]::CreateDirectory((Split-Path -Parent $outputFile)) | Out-Null
    [IO.File]::WriteAllText($outputFile, $captureJson + [Environment]::NewLine)
    Write-Output "Captured $($captureData.pages.Count) pages, $($captureData.components.Count) components; $($captureData.errors.Count) scoped read errors."
} finally { Pop-Location }
