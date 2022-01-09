import '@emotion/react'

import { LiquidTheme } from '../../../styles/theme'

declare module '@emotion/react' {
  export interface Theme extends LiquidTheme {}
}
