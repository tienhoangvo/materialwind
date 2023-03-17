import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

export type ContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}
const Content = ({ children, className }: ContentProps) => {
  return (
    <div
      className={clsx(
        'relative z-[1] flex items-center',
        className,
        'group-disabled:text-schemes-light-onSurface group-disabled:opacity-disabled-content dark:group-disabled:text-schemes-dark-onSurface'
      )}
    >
      {children}
    </div>
  )
}
export default Content
