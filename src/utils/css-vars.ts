import { css } from '@emotion/react'

export enum CssVars {
  FocusBorderColor = '--liquid-focus-border-color',
  InvalidFocusBorderColor = '--liquid-invalid-focus-border-color',
  Transform = '--liquid-transform',
  TranslateX = '--liquid-translate-x',
  TranslateY = '--liquid-translate-y',
  Rotate = '--liquid-rotate',
  ScaleX = '--liquid-scale-x',
  ScaleY = '--liquid-scale-y',
  SkewX = '--liquid-skew-x',
  SkewY = '--liquid-skew-y',
}

export const cssVar = (value: CssVars, fallback?: any) => {
  return `var(${value}${fallback ? `, ${fallback}` : ''})`
}

const transformValues = [
  `translateX(${cssVar(CssVars.TranslateX)})`,
  `translateY(${cssVar(CssVars.TranslateY)})`,
  `rotate(${cssVar(CssVars.Rotate)})`,
  `scaleX(${cssVar(CssVars.ScaleX)})`,
  `scaleY(${cssVar(CssVars.ScaleY)})`,
  `skewX(${cssVar(CssVars.SkewX)})`,
  `skewY(${cssVar(CssVars.SkewY)})`,
]
const transformGpuValues = [
  `translate3d(${cssVar(CssVars.TranslateX)}, ${cssVar(CssVars.TranslateX)}, 0)`,
  `rotate(${cssVar(CssVars.Rotate)})`,
  `scaleX(${cssVar(CssVars.ScaleX)})`,
  `scaleY(${cssVar(CssVars.ScaleY)})`,
  `skewX(${cssVar(CssVars.SkewX)})`,
  `skewY(${cssVar(CssVars.SkewY)})`,
]

export const transformCssWithVariables = transformValues.join(' ')
export const transformGpuCssWithVariables = transformGpuValues.join(' ')

export const initializeCssVars = css({
  ':root': {
    [CssVars.FocusBorderColor]: 'rgb(66 153 225 / 60%)',
    [CssVars.InvalidFocusBorderColor]: 'rgb(252 165 165)',
    [CssVars.TranslateX]: '0',
    [CssVars.TranslateY]: '0',
    [CssVars.Rotate]: '0',
    [CssVars.ScaleX]: '1',
    [CssVars.ScaleY]: '1',
    [CssVars.SkewX]: '0',
    [CssVars.SkewY]: '0',
    [CssVars.Transform]: transformValues.join(' '),
  },
})
