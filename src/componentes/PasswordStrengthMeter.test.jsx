import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PasswordStrengthMeter from './PasswordStrengthMeter'


describe('PasswordStrengthMeter', () => {
  it('renders a password input', () => {
    render(<PasswordStrengthMeter />)
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('renders a password strength meter', () => {
    render(<PasswordStrengthMeter />)
    expect(screen.getByText("vacía")).toBeInTheDocument()
  }) 

  it('renders "debil" when password is less than 8 characters', async () =>{
    render(<PasswordStrengthMeter />)
    const input = screen.getByLabelText(/password/i)
    await userEvent.type(input, "123")
    expect(screen.getByText("débil")).toBeInTheDocument()
  })

  it('renders "media" when password has no symbols or numbers', async () => {
    render(<PasswordStrengthMeter />)
    const input = screen.getByLabelText(/password/i)
    await userEvent.type(input, "contraseña")
    expect(screen.getByText("media")).toBeInTheDocument()
  })

  it('renders "fuerte" when password has numbers', async () => {
    render(<PasswordStrengthMeter />)
    const input = screen.getByLabelText(/password/i)
    await userEvent.type(input, "contrasena1")
    expect(screen.getByText("fuerte")).toBeInTheDocument()
  })

  it('renders "muy fuerte" when password has symbols and numbers', async () => {
    render(<PasswordStrengthMeter />)
    const input = screen.getByLabelText(/password/i)
    await userEvent.type(input, "contrasena1!!")
    expect(screen.getByText("muy fuerte")).toBeInTheDocument()
  })

  it('does not render "debil" when password is exactly 8 characters with no numbers', async () =>{
    render(<PasswordStrengthMeter />)
    const input = screen.getByLabelText(/password/i)
    await userEvent.type(input, 'duquesaa')
    expect(screen.queryByText("débil")).not.toBeInTheDocument()
  })

  it('does not render "media" if password is 7 characters', async () => {
    render(<PasswordStrengthMeter />)
    const input = screen.getByLabelText(/password/i)
    await userEvent.type(input, 'contra5')
    expect(screen.queryByText("media")).not.toBeInTheDocument()
  })

  it('does not render "media" if password with symbols is 7 characters', async () => {
    render(<PasswordStrengthMeter />)
    const input = screen.getByLabelText(/password/i)
    await userEvent.type(input, '#######')
    expect(screen.getByText("débil")).toBeInTheDocument()
  })

  it('shows progress bar with correct value for "fuerte"', async () => {
    render(<PasswordStrengthMeter />)
    const input = screen.getByLabelText(/password/i)
    await userEvent.type(input, 'contrasena1')
    const bar = screen.getByRole('progressbar')
    expect(bar.value).toBe(75)
  })

  it('renders "vacía" when input is cleared', async () => {
    render(<PasswordStrengthMeter />)
    const input = screen.getByLabelText(/password/i)
    await userEvent.type(input, 'contrasena1')
    await userEvent.clear(input)
    expect(screen.getByText(/vacía/i)).toBeInTheDocument()
  })

})
