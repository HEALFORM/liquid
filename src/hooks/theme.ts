import { themeGet } from '@styled-system/theme-get'

import { ThemeColorsValues } from '../styles/modules/colors'
import {
  LiquidBorder,
  LiquidRadius,
  LiquidShadow,
  LiquidZIndex,
  ThemeBordersValues,
  ThemeRadiiValues,
  ThemeShadowsValues,
  ThemeSpacingValues,
  ThemeZIndicesValues,
} from '../styles/theme'
import { useTheme } from './useTheme'

export const useColorModeValue = (light: ThemeColorsValues, dark: ThemeColorsValues): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`colors.${light}`, light)({ theme })
  }

  return themeGet(`colors.${dark}`, dark)({ theme })
}

export const useColor = (token: ThemeColorsValues, fallback?: ThemeColorsValues): string => {
  const theme = useTheme()
  return themeGet(`colors.${token}`, fallback)({ theme })
}

export const useColors = (...tokens: ThemeColorsValues[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`colors.${token}`)({ theme }))
}

export const useShadowModeValue = (
  light: ThemeShadowsValues | LiquidShadow,
  dark: ThemeShadowsValues | LiquidShadow,
): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`shadows.${light}`, light)({ theme })
  }

  return themeGet(`shadows.${dark}`, dark)({ theme })
}

export const useShadow = (
  token: ThemeShadowsValues | LiquidShadow,
  fallback?: ThemeShadowsValues | LiquidShadow,
): string => {
  const theme = useTheme()
  return themeGet(`shadows.${token}`, fallback)({ theme })
}

export const useShadows = (...tokens: (ThemeColorsValues | LiquidShadow)[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`shadows.${token}`)({ theme }))
}

export const useBorderModeValue = (
  light: ThemeBordersValues | LiquidBorder,
  dark: ThemeBordersValues | LiquidBorder,
): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`borders.${light}`, light)({ theme })
  }

  return themeGet(`borders.${dark}`, dark)({ theme })
}

export const useBorder = (
  token: ThemeBordersValues | LiquidBorder,
  fallback?: ThemeBordersValues | LiquidBorder,
): string => {
  const theme = useTheme()
  return themeGet(`borders.${token}`, fallback)({ theme })
}

export const useBorders = (...tokens: (ThemeBordersValues | LiquidBorder)[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`borders.${token}`)({ theme }))
}

export const useZIndexModeValue = (
  light: ThemeZIndicesValues | LiquidZIndex,
  dark: ThemeZIndicesValues | LiquidZIndex,
): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`zIndices.${light}`, light)({ theme })
  }

  return themeGet(`zIndices.${dark}`, dark)({ theme })
}

export const useZIndex = (
  token: ThemeZIndicesValues | LiquidZIndex,
  fallback?: ThemeZIndicesValues | LiquidZIndex,
): string => {
  const theme = useTheme()
  return themeGet(`zIndices.${token}`, fallback)({ theme })
}

export const useZIndices = (...tokens: (ThemeZIndicesValues | LiquidZIndex)[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`zIndices.${token}`)({ theme }))
}

export const useSpaceModeValue = (light: ThemeSpacingValues, dark: ThemeSpacingValues): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`space.${light}`, light)({ theme })
  }

  return themeGet(`space.${dark}`, dark)({ theme })
}

export const useSpace = (token: ThemeSpacingValues, fallback?: ThemeSpacingValues): string => {
  const theme = useTheme()
  return themeGet(`space.${token}`, fallback)({ theme })
}

export const useSpaces = (...tokens: ThemeSpacingValues[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`space.${token}`)({ theme }))
}

export const useSizeModeValue = (light: ThemeSpacingValues, dark: ThemeSpacingValues): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`sizes.${light}`, light)({ theme })
  }

  return themeGet(`sizes.${dark}`, dark)({ theme })
}

export const useSize = (token: ThemeSpacingValues, fallback?: ThemeSpacingValues): string => {
  const theme = useTheme()
  return themeGet(`sizes.${token}`, fallback)({ theme })
}

export const useSizes = (...tokens: ThemeSpacingValues[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`sizes.${token}`)({ theme }))
}

export const useRadiusModeValue = (
  light: ThemeRadiiValues | LiquidRadius,
  dark: ThemeRadiiValues | LiquidRadius,
): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`radii.${light}`, light)({ theme })
  }

  return themeGet(`radii.${dark}`, dark)({ theme })
}

export const useRadius = (
  token: ThemeRadiiValues | LiquidRadius,
  fallback?: ThemeRadiiValues | LiquidRadius,
): string => {
  const theme = useTheme()
  return themeGet(`radii.${token}`, fallback)({ theme })
}

export const useRadii = (...tokens: (ThemeRadiiValues | LiquidRadius)[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`radii.${token}`)({ theme }))
}
