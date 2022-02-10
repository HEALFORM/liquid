import tokens from '@healform/design-tokens/dist/js/tokens'

export const colors = {
  blue: {
    '50': tokens.colors.blue['50'].value,
    '100': tokens.colors.blue['100'].value,
    '200': tokens.colors.blue['200'].value,
    '300': tokens.colors.blue['300'].value,
    '400': tokens.colors.blue['400'].value,
    '500': tokens.colors.blue['500'].value,
    '600': tokens.colors.blue['600'].value,
    '700': tokens.colors.blue['700'].value,
    '800': tokens.colors.blue['800'].value,
    '900': tokens.colors.blue['900'].value,
  },
  seagrass: {
    '50': tokens.colors.seagrass['50'].value,
    '100': tokens.colors.seagrass['100'].value,
    '200': tokens.colors.seagrass['200'].value,
    '300': tokens.colors.seagrass['300'].value,
    '400': tokens.colors.seagrass['400'].value,
    '500': tokens.colors.seagrass['500'].value,
    '600': tokens.colors.seagrass['600'].value,
    '700': tokens.colors.seagrass['700'].value,
    '800': tokens.colors.seagrass['800'].value,
    '900': tokens.colors.seagrass['900'].value,
  },
  violet: {
    '50': tokens.colors.violet['50'].value,
    '100': tokens.colors.violet['100'].value,
    '200': tokens.colors.violet['200'].value,
    '300': tokens.colors.violet['300'].value,
    '400': tokens.colors.violet['400'].value,
    '500': tokens.colors.violet['500'].value,
    '600': tokens.colors.violet['600'].value,
    '700': tokens.colors.violet['700'].value,
    '800': tokens.colors.violet['800'].value,
    '900': tokens.colors.violet['900'].value,
  },
  yellow: {
    '50': tokens.colors.yellow['50'].value,
    '100': tokens.colors.yellow['100'].value,
    '200': tokens.colors.yellow['200'].value,
    '300': tokens.colors.yellow['300'].value,
    '400': tokens.colors.yellow['400'].value,
    '500': tokens.colors.yellow['500'].value,
    '600': tokens.colors.yellow['600'].value,
    '700': tokens.colors.yellow['700'].value,
    '800': tokens.colors.yellow['800'].value,
    '900': tokens.colors.yellow['900'].value,
  },
  turquoise: {
    '50': tokens.colors.turquoise['50'].value,
    '100': tokens.colors.turquoise['100'].value,
    '200': tokens.colors.turquoise['200'].value,
    '300': tokens.colors.turquoise['300'].value,
    '400': tokens.colors.turquoise['400'].value,
    '500': tokens.colors.turquoise['500'].value,
    '600': tokens.colors.turquoise['600'].value,
    '700': tokens.colors.turquoise['700'].value,
    '800': tokens.colors.turquoise['800'].value,
    '900': tokens.colors.turquoise['900'].value,
  },
  orange: {
    '50': tokens.colors.orange['50'].value,
    '100': tokens.colors.orange['100'].value,
    '200': tokens.colors.orange['200'].value,
    '300': tokens.colors.orange['300'].value,
    '400': tokens.colors.orange['400'].value,
    '500': tokens.colors.orange['500'].value,
    '600': tokens.colors.orange['600'].value,
    '700': tokens.colors.orange['700'].value,
    '800': tokens.colors.orange['800'].value,
    '900': tokens.colors.orange['900'].value,
  },
  green: {
    '50': tokens.colors.green['50'].value,
    '100': tokens.colors.green['100'].value,
    '200': tokens.colors.green['200'].value,
    '300': tokens.colors.green['300'].value,
    '400': tokens.colors.green['400'].value,
    '500': tokens.colors.green['500'].value,
    '600': tokens.colors.green['600'].value,
    '700': tokens.colors.green['700'].value,
    '800': tokens.colors.green['800'].value,
    '900': tokens.colors.green['900'].value,
  },
  red: {
    '50': tokens.colors.red['50'].value,
    '100': tokens.colors.red['100'].value,
    '200': tokens.colors.red['200'].value,
    '300': tokens.colors.red['300'].value,
    '400': tokens.colors.red['400'].value,
    '500': tokens.colors.red['500'].value,
    '600': tokens.colors.red['600'].value,
    '700': tokens.colors.red['700'].value,
    '800': tokens.colors.red['800'].value,
    '900': tokens.colors.red['900'].value,
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
}

// @ts-ignore
export const colorKeys = (color: string | number) =>
  // @ts-ignore
  Object.keys(colors[color]).reduce(
    (values, currentValue) => ({
      ...values,
      // @ts-ignore
      [`${currentValue}`]: colors[color][currentValue],
    }),
    {},
  )

// @ts-ignore
export const colorOptions = Object.keys(colors).reduce((acc, color) => {
  return [
    ...acc,
    // @ts-ignore
    ...Object.keys(colors[color]).reduce((values, num) => {
      return [...values, `${color}.${num}`]
    }, []),
  ]
}, [])
