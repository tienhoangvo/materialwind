import clsx from 'clsx'
import { HTMLAttributes } from 'react'
import Segment from './Segment'

export type SegmentedButtonProps = HTMLAttributes<HTMLMenuElement>

const SegmentedButton = ({ children, className }: SegmentedButtonProps) => {
  return (
    <menu
      className={clsx(
        'h-10 rounded-full border border-schemes-light-outline dark:border-schemes-dark-outline grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] overflow-hidden',
        '[&>*:not(:last-child)]:border-r',
        className
      )}
    >
      {children}
    </menu>
  )
}

SegmentedButton.Segment = Segment

export default SegmentedButton
