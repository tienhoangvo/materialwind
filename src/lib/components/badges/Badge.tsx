import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  label?: string
  children: ReactNode
}

const Badge = ({ label, children, ...rest }: BadgeProps) => {
  return (
    <div
      className={clsx('relative flex items-center justify-center')}
      {...rest}
    >
      {children}
      <div
        className={clsx(
          'rounded-full overflow-hidden absolute',
          !label && 'w-[6px] top-0 right-0 aspect-square',
          label && 'h-[16px] left-3 bottom-3 label-small px-1 text-center',
          label && label.length === 1 && 'aspect-square',
          'bg-schemes-light-error text-schemes-light-onError dark:bg-schemes-dark-error dark:text-schemes-dark-onError'
        )}
      >
        {label && label}
      </div>
    </div>
  )
}

export default Badge
