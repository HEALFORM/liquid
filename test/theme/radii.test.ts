import tokens from '@healform/design-tokens/dist/js/tokens'

import { radii } from "../../src/theme/radii.theme";

describe('theme/radii', () => {
  describe('radii.none', () => {
    it('should return the correct value', () => {
      expect(radii.none).toBe(tokens.radius.none.value)
    })
  })
  describe('radii.sm', () => {
    it('should return the correct value', () => {
      expect(radii.sm).toBe(tokens.radius.sm.value)
    })
  })
  describe('radii.base', () => {
    it('should return the correct value', () => {
      expect(radii.base).toBe('4px')
    })
  })
  describe('radii.md', () => {
    it('should return the correct value', () => {
      expect(radii.md).toBe(tokens.radius.md.value)
    })
  })
  describe('radii.lg', () => {
    it('should return the correct value', () => {
      expect(radii.lg).toBe(tokens.radius.lg.value)
    })
  })
  describe('radii.xl', () => {
    it('should return the correct value', () => {
      expect(radii.xl).toBe(tokens.radius.xl.value)
    })
  })
  describe('radii.xxl', () => {
    it('should return the correct value', () => {
      expect(radii.xxl).toBe(tokens.radius.xxl.value)
    })
  })
  describe('radii.full', () => {
    it('should return the correct value', () => {
      expect(radii.full).toBe(tokens.radius.circle.value)
    })
  })
})

