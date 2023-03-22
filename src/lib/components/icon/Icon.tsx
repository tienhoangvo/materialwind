import clsx from 'clsx'
import { HTMLAttributes } from 'react'

export type IconProps = HTMLAttributes<HTMLSpanElement> & {
  name: string
  filled?: boolean
}

const Icon = ({ name, filled, className, ...rest }: IconProps) => {
  return (
    <span className={clsx('material-symbols-rounded', filled && 'icon-filled', className)} {...rest}>
      {name}
    </span>
  )
}

export default Icon
