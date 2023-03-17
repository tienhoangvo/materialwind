import { clsx } from 'clsx'
import { ReactNode } from 'react'
import Button, { ButtonProps } from './Button'

export type ElevatedButtonProps = ButtonProps & {
  icon?: ReactNode
}

const ElevatedButton = ({ children, icon, ...rest }: ElevatedButtonProps) => {
  return (
    <Button
      className={clsx(
        'group',
        'bg-surface-light-1 shadow-1 dark:bg-surface-dark-1',
        'hover:bg-surface-light-2 hover:shadow-2 dark:hover:bg-surface-dark-2',
        'focus:bg-surface-light-1 focus:shadow-1 dark:focus:bg-surface-dark-1'
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          'bg-schemes-light-primary dark:bg-schemes-dark-primary'
        )}
      />
      <Button.Content
        className={clsx(
          'text-schemes-light-primary dark:text-schemes-dark-primary'
        )}
      >
        {icon && <Button.Icon>{icon}</Button.Icon>}
        <Button.Label>{children}</Button.Label>
      </Button.Content>
    </Button>
  )
}

export default ElevatedButton
