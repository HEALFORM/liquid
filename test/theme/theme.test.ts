import tokens from '@healform/design-tokens/dist/js/tokens'

import { colors } from '../../src/theme/colors.theme'

describe('theme/colors', () => {
  describe('blue.50', () => {
    it('should return the correct value', () => {
      expect(colors.blue['50']).toBe(tokens.colors.blue['50'].value)
    })
  })
  describe('blue.100', () => {
    it('should return the correct value', () => {
      expect(colors.blue['100']).toBe(tokens.colors.blue['100'].value)
    })
  })
  describe('blue.200', () => {
    it('should return the correct value', () => {
      expect(colors.blue['200']).toBe(tokens.colors.blue['200'].value)
    })
  })
  describe('blue.300', () => {
    it('should return the correct value', () => {
      expect(colors.blue['300']).toBe(tokens.colors.blue['300'].value)
    })
  })
  describe('blue.400', () => {
    it('should return the correct value', () => {
      expect(colors.blue['400']).toBe(tokens.colors.blue['400'].value)
    })
  })
  describe('blue.500', () => {
    it('should return the correct value', () => {
      expect(colors.blue['500']).toBe(tokens.colors.blue['500'].value)
    })
  })
  describe('blue.600', () => {
    it('should return the correct value', () => {
      expect(colors.blue['600]).toBe(tokens.colors.blue['600'].value)
    })
  })
  describe('blue.700', () => {
    it('should return the correct value', () => {
      expect(colors.blue['700']).toBe(tokens.colors.blue['700'].value)
    })
  })
  describe('blue.800', () => {
    it('should return the correct value', () => {
      expect(colors.blue['800']).toBe(tokens.colors.blue['800'].value)
    })
  })
  describe('blue.900', () => {
    it('should return the correct value', () => {
      expect(colors.blue['900']).toBe(tokens.colors.blue['900'].value)
    })
  })
})

