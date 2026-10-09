import type { ReactNode } from 'react'
import './DemoControls.css'

/** Catalog chrome only: never styles or owns the specimen's state. */
export function DemoControls({ children, className = '', label = 'Personalizza esempio' }: { children: ReactNode; className?: string; label?: string }) {
  return <details className="ds-demo-settings">
    <summary>{label}<span aria-hidden="true">⌄</span></summary>
    <div className={`ds-demo-fields ${className}`}>{children}</div>
  </details>
}
