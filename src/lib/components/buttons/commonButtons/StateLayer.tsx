import clsx from 'clsx'
import { HTMLAttributes } from 'react'

export type StateLayerProps = HTMLAttributes<HTMLDivElement>

const StateLayer = ({ className, ...rest }: StateLayerProps) => {
  return (
    <div
      className={clsx(
        'state-layer',
        className,
        'absolute bottom-0 left-0 h-full w-full opacity-0',
        'group-hover:opacity-hovered',
        'group-focus:opacity-focused',
        'group-disabled:opacity-disabled-container group-disabled:bg-schemes-light-onSurface',
        'dark:group-disabled:bg-schemes-dark-onSurface dark:group-disabled:opacity-disabled-container',
        'transition duration-200'
      )}
      {...rest}
      aria-hidden
    />
  )
}

export default StateLayer
