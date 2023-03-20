import clsx from 'clsx'
import { HTMLAttributes } from 'react'

export type ButtonIconProps = HTMLAttributes<HTMLSpanElement>

const ButtonIcon = ({ children, className }: ButtonIconProps) => {
  return <span className={clsx('flex aspect-square [&>*]:h-full [&>*]:w-full [&>*]:leading-[1] overflow-hidden',className)}>{children}</span>
}

export default ButtonIcon
