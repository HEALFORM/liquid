import tokens from '@healform/design-tokens/dist/json/tokens-nested.json'

const colorsData = tokens.colors
export const colors = colorsData

export const colorKeys = (color: string | number) =>
  Object.keys(colors[color]).reduce(
    (values, currentValue) => ({
      ...values,
      [`${currentValue}`]: colors[color][currentValue],
    }),
    {},
  )

export const colorOptions = Object.keys(colors).reduce((acc, color) => {
  return [
    ...acc,
    ...Object.keys(colors[color]).reduce((values, num) => {
      return [...values, `${color}.${num}`]
    }, []),
  ]
}, [])
