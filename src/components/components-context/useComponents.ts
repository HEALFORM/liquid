import { useContext } from 'react'

import { ComponentsContext, ComponentsContextType, defaultComponents } from './ComponentsContext'

/**
 * Subscribe to the components context with a hook.
 */
export const useComponents = (): ComponentsContextType => {
  const components = useContext(ComponentsContext) || {}
  return { ...defaultComponents, ...components }
}
