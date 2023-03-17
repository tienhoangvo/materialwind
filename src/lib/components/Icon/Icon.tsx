import clsx from 'clsx'
import { HTMLAttributes } from 'react'

export type IconProps = HTMLAttributes<HTMLSpanElement> & {
  name: string
  filled?: boolean
}

const Icon = ({ name, filled }: IconProps) => {
  return (
    <span className={clsx('material-symbols-rounded', filled && 'icon-filled')}>
      {name}
    </span>
  )
}

export default Icon
