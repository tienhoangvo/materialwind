import clsx from 'clsx'
import { HTMLAttributes } from 'react'

export type StateLayerProps = HTMLAttributes<HTMLDivElement>

const StateLayer = ({ className, ...rest }: StateLayerProps) => {
  return (
    <div
      className={clsx('state-layer',className, 'absolute bottom-0 left-0 h-full w-full opacity-0', )}
      {...rest}
      aria-hidden
    />
  )
}

export default StateLayer
