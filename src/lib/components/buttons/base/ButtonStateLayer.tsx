import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

export type StateLayerProps = HTMLAttributes<HTMLSpanElement>

const ButtonStateLayer = ({ className, ...rest }: StateLayerProps) => {
  return (
    <span
      className={clsx(
        'block absolute h-full w-full bottom-0 left-0 opacity-0',
        'group-hover:opacity-hovered',
        'group-focus:opacity-focused',
        'transition-all duration-200',
        className
      )}
      {...rest}
    />
  )
}

export default ButtonStateLayer
