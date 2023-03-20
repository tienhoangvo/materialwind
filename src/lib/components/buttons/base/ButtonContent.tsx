import clsx from 'clsx'
import { HTMLAttributes } from 'react'

export type ButtonContentProps = HTMLAttributes<HTMLSpanElement>
const ButtonContent = ({ className, children }: ButtonContentProps) => {
  return <span className={clsx('relative z-[1] transition-all duration-200', className)}>{children}</span>
}

export default ButtonContent
