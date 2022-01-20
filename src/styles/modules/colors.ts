/* eslint-disable @typescript-eslint/ban-types */
import theme from '@healform/design-tokens/dist/js/theme'

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  dark: '#30363D',
  text: '#18181b',
  background: '#fff',
  black: theme.colors.black.value,
  white: theme.colors.white.value,

  blue: {
    '50': theme.colors.blue['50'].value,
    '100': theme.colors.blue['100'].value,
    '200': theme.colors.blue['200'].value,
    '300': theme.colors.blue['300'].value,
    '400': theme.colors.blue['400'].value,
    '500': theme.colors.blue['500'].value,
    '600': theme.colors.blue['600'].value,
    '700': theme.colors.blue['700'].value,
    '800': theme.colors.blue['800'].value,
    '900': theme.colors.blue['900'].value,
  },
  seagrass: {
    '50': theme.colors.seagrass['50'].value,
    '100': theme.colors.seagrass['100'].value,
    '200': theme.colors.seagrass['200'].value,
    '300': theme.colors.seagrass['300'].value,
    '400': theme.colors.seagrass['400'].value,
    '500': theme.colors.seagrass['500'].value,
    '600': theme.colors.seagrass['600'].value,
    '700': theme.colors.seagrass['700'].value,
    '800': theme.colors.seagrass['800'].value,
    '900': theme.colors.seagrass['900'].value,
  },
  violet: {
    '50': theme.colors.violet['50'].value,
    '100': theme.colors.violet['100'].value,
    '200': theme.colors.violet['200'].value,
    '300': theme.colors.violet['300'].value,
    '400': theme.colors.violet['400'].value,
    '500': theme.colors.violet['500'].value,
    '600': theme.colors.violet['600'].value,
    '700': theme.colors.violet['700'].value,
    '800': theme.colors.violet['800'].value,
    '900': theme.colors.violet['900'].value,
  },
  yellow: {
    '50': theme.colors.yellow['50'].value,
    '100': theme.colors.yellow['100'].value,
    '200': theme.colors.yellow['200'].value,
    '300': theme.colors.yellow['300'].value,
    '400': theme.colors.yellow['400'].value,
    '500': theme.colors.yellow['500'].value,
    '600': theme.colors.yellow['600'].value,
    '700': theme.colors.yellow['700'].value,
    '800': theme.colors.yellow['800'].value,
    '900': theme.colors.yellow['900'].value,
  },
  turquoise: {
    '50': theme.colors.turquoise['50'].value,
    '100': theme.colors.turquoise['100'].value,
    '200': theme.colors.turquoise['200'].value,
    '300': theme.colors.turquoise['300'].value,
    '400': theme.colors.turquoise['400'].value,
    '500': theme.colors.turquoise['500'].value,
    '600': theme.colors.turquoise['600'].value,
    '700': theme.colors.turquoise['700'].value,
    '800': theme.colors.turquoise['800'].value,
    '900': theme.colors.turquoise['900'].value,
  },
  orange: {
    '50': theme.colors.orange['50'].value,
    '100': theme.colors.orange['100'].value,
    '200': theme.colors.orange['200'].value,
    '300': theme.colors.orange['300'].value,
    '400': theme.colors.orange['400'].value,
    '500': theme.colors.orange['500'].value,
    '600': theme.colors.orange['600'].value,
    '700': theme.colors.orange['700'].value,
    '800': theme.colors.orange['800'].value,
    '900': theme.colors.orange['900'].value,
  },
  green: {
    '50': theme.colors.green['50'].value,
    '100': theme.colors.green['100'].value,
    '200': theme.colors.green['200'].value,
    '300': theme.colors.green['300'].value,
    '400': theme.colors.green['400'].value,
    '500': theme.colors.green['500'].value,
    '600': theme.colors.green['600'].value,
    '700': theme.colors.green['700'].value,
    '800': theme.colors.green['800'].value,
    '900': theme.colors.green['900'].value,
  },
  red: {
    '50': theme.colors.red['50'].value,
    '100': theme.colors.red['100'].value,
    '200': theme.colors.red['200'].value,
    '300': theme.colors.red['300'].value,
    '400': theme.colors.red['400'].value,
    '500': theme.colors.red['500'].value,
    '600': theme.colors.red['600'].value,
    '700': theme.colors.red['700'].value,
    '800': theme.colors.red['800'].value,
    '900': theme.colors.red['900'].value,
  },
  gray: {
    '50': '#fafafa',
    '100': '#f0f0f0',
    '200': '#e4e4e7',
    '300': '#d4d4d8',
    '400': '#a1a1aa',
    '500': '#71717a',
    '600': '#52525b',
    '700': '#3f3f46',
    '800': '#27272a',
    '900': '#18181b',
  },
} as const

// type NestedColors =
//   | 'rose'
//   | 'pink'
//   | 'fuchsia'
//   | 'purple'
//   | 'violet'
//   | 'indigo'
//   | 'blue'
//   | 'cyan'
//   | 'teal'
//   | 'emerald'
//   | 'green'
//   | 'lime'
//   | 'yellow'
//   | 'yellow'
//   | 'orange'
//   | 'red'
//   | 'gray'
//   | 'light-blue'
//   | 'warm-gray'
//   | 'true-gray'
//   | 'gray'
//   | 'blue-gray'
//
// type Shading = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

// seems to cause rollup not to compile... weird, so currently defining here all the colors
// looks like tsdx is using a rollup plugin which does not understand quite the new TS template litterals types
// type PathsToStringProps<T> = T extends string
//   ? []
//   : {
//       [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>]
//     }[Extract<keyof T, string>];
//
// type Join<T extends string[], D extends string> = T extends []
//   ? never
//   : T extends [infer F]
//   ? F
//   : T extends [infer F, ...infer R]
//   ? F extends string
//     ? string extends F
//       ? string
//       : `${F}${D}${Join<Extract<R, string[]>, D>}`
//     : never
//   : string;

type NestedThemeColorsValues =
  | 'blue.50'
  | 'blue.100'
  | 'blue.200'
  | 'blue.300'
  | 'blue.400'
  | 'blue.500'
  | 'blue.600'
  | 'blue.700'
  | 'blue.800'
  | 'blue.900'
  | 'seagrass.50'
  | 'seagrass.100'
  | 'seagrass.200'
  | 'seagrass.300'
  | 'seagrass.400'
  | 'seagrass.500'
  | 'seagrass.600'
  | 'seagrass.700'
  | 'seagrass.800'
  | 'seagrass.900'
  | 'violet.50'
  | 'violet.100'
  | 'violet.200'
  | 'violet.300'
  | 'violet.400'
  | 'violet.500'
  | 'violet.600'
  | 'violet.700'
  | 'violet.800'
  | 'violet.900'
  | 'yellow.50'
  | 'yellow.100'
  | 'yellow.200'
  | 'yellow.300'
  | 'yellow.400'
  | 'yellow.500'
  | 'yellow.600'
  | 'yellow.700'
  | 'yellow.800'
  | 'yellow.900'
  | 'turquoise.50'
  | 'turquoise.100'
  | 'turquoise.200'
  | 'turquoise.300'
  | 'turquoise.400'
  | 'turquoise.500'
  | 'turquoise.600'
  | 'turquoise.700'
  | 'turquoise.800'
  | 'turquoise.900'
  | 'orange.50'
  | 'orange.100'
  | 'orange.200'
  | 'orange.300'
  | 'orange.400'
  | 'orange.500'
  | 'orange.600'
  | 'orange.700'
  | 'orange.800'
  | 'orange.900'
  | 'green.50'
  | 'green.100'
  | 'green.200'
  | 'green.300'
  | 'green.400'
  | 'green.500'
  | 'green.600'
  | 'green.700'
  | 'green.800'
  | 'green.900'
  | 'red.50'
  | 'red.100'
  | 'red.200'
  | 'red.300'
  | 'red.400'
  | 'red.500'
  | 'red.600'
  | 'red.700'
  | 'red.800'
  | 'red.900'
  | 'gray.50'
  | 'gray.100'
  | 'gray.200'
  | 'gray.300'
  | 'gray.400'
  | 'gray.500'
  | 'gray.600'
  | 'gray.700'
  | 'gray.800'
  | 'gray.900'

type RootThemeColorsValues = 'transparent' | 'current' | 'dark' | 'black' | 'white' | 'text' | 'background'

export type ThemeColorsValues = NestedThemeColorsValues | RootThemeColorsValues | (string & {})

export default colors
