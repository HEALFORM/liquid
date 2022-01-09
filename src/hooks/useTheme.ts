import { useTheme as useEmotionTheme } from '@emotion/react'

import { LiquidTheme } from '../styles/theme'

export const useTheme = (): LiquidTheme => useEmotionTheme()
