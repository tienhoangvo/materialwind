import { clsx } from 'clsx'
import { ReactNode } from 'react'
import CommonButton, { CommonButtonProps } from './CommonButton'

export type ElevatedButtonProps = CommonButtonProps & {
  icon?: ReactNode
}

const ElevatedButton = ({
  children,
  icon,
  ref,
  className,
  ...rest
}: ElevatedButtonProps) => {
  return (
    <CommonButton
      ref={ref}
      className={clsx(
        'group',
        'bg-surface-light-1 shadow-1 dark:bg-surface-dark-1',
        'hover:bg-surface-light-2 hover:shadow-2 dark:hover:bg-surface-dark-2',
        'focus:bg-surface-light-1 focus:shadow-1 dark:focus:bg-surface-dark-1',
        className
      )}
      {...rest}
    >
      <CommonButton.StateLayer
        className={clsx(
          'bg-schemes-light-primary dark:bg-schemes-dark-primary'
        )}
      />
      <CommonButton.Content
        className={clsx(
          'text-schemes-light-primary dark:text-schemes-dark-primary'
        )}
      >
        {icon && <CommonButton.Icon>{icon}</CommonButton.Icon>}
        <CommonButton.Label>{children}</CommonButton.Label>
      </CommonButton.Content>
    </CommonButton>
  )
}

export default ElevatedButton
