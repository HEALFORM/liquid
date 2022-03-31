import * as tokens from '@healform/design-tokens/dist/json/tokens-nested.json';

export const colors = {
  ...tokens.colors
}

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
