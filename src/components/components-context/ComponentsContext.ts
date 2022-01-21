import { createContext, ReactNode } from 'react'

import { Link, LinkProps } from './components/Link'

export const defaultComponents = { Link }

export type ComponentsContextType = {
  Link: (props: LinkProps) => ReactNode
}

export const ComponentsContext = createContext<ComponentsContextType>(defaultComponents)
