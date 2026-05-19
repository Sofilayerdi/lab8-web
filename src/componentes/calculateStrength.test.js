import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { calculateStrength } from './calculateStrength'

describe('calculateStrength', () => {
  it('returns "vacía" for empty string', () => {
    expect(calculateStrength("")).toBe("vacía")
  })
  it('returns "débil" for less than 8 chars', () => {
    expect(calculateStrength("abc")).toBe("débil")
  })
  it('returns "media" for 8+ chars without numbers', () => {
    expect(calculateStrength("contraseña")).toBe("media")
  })
  it('returns "fuerte" for 8+ chars with number', () => {
    expect(calculateStrength("contrasena1")).toBe("fuerte")
  })
  it('returns "muy fuerte" for 8+ chars with number and symbol', () => {
    expect(calculateStrength("contraseña1!")).toBe("muy fuerte")
  })
})