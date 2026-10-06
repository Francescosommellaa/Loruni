import type { ReactNode } from 'react'

export type ComponentExample = {
  name: string
  description: string
  source: string
  examples: readonly { name: string; preview: ReactNode }[]
}

// Add real imported components and their states here as they are implemented.
// Documentation controls are not product components.
export const componentExamples: readonly ComponentExample[] = []
