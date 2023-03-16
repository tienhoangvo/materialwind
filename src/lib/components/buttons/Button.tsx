import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'
import Content from './Content'
import StateLayer from './StateLayer'
import ContentIcon from './ContentIcon'
import ContentLabel from './ContentLabel'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode,
}

const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button className={clsx('label-large h-10 rounded-full bg-palettes-primary-0 text-palettes-primary-50 px-6 relative overflow-hidden', className)} {...rest}>
      {children}
    </button>
  )
}

Button.Content = Content

Button.StateLayer = StateLayer

Button.Icon = ContentIcon

Button.Label = ContentLabel

export default Button
