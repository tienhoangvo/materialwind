import clsx from 'clsx'
import type { ButtonHTMLAttributes, RefAttributes } from 'react'
import ButtonContent from './ButtonContent'
import ButtonIcon from './ButtonIcon'
import ButtonLabel from './ButtonLabel'
import ButtonStateLayer from './ButtonStateLayer'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  RefAttributes<HTMLButtonElement>

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx('relative overflow-hidden transition-all duration-200', className)}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.Content = ButtonContent

Button.StateLayer = ButtonStateLayer

Button.Icon = ButtonIcon

Button.Label = ButtonLabel

export default Button
