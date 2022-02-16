import tokens from '@healform/design-tokens/dist/js/tokens'

import { colors } from '../../src/theme/colors.theme'

describe('theme/colors', () => {
  describe('color', () => {
    it('should return the correct value', () => {
      expect(colors.yellow['50']).toBe(tokens.colors.yellow['50'].value)
    })
  })
})
