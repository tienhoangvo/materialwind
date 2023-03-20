import clsx from 'clsx'
import { HTMLAttributes } from 'react'

export type ButtonLabelProps = HTMLAttributes<HTMLSpanElement>
export const ButtonLabel = ({ children, className }: ButtonLabelProps) => {
  return <span className={clsx(className)}>{children}</span>
}

export default ButtonLabel
 