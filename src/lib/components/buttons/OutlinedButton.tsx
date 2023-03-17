import clsx from 'clsx'
import { ReactNode } from 'react'
import Button, { ButtonProps } from './Button'

export type OutlinedButtonProps = ButtonProps & {
  icon?: ReactNode
}

const OutlinedButton = ({ icon, children, ...rest }: OutlinedButtonProps) => {
  return (
    <Button
      className={clsx(
        'group',
        'bg-[unset] dark:bg-[unset]',
        'border border-schemes-light-outline dark:border-schemes-dark-outline',
        'focus:shadow-[none]',
        'disabled:border-schemes-light-onSurface disabled:border-opacity-disabled-container dark:disabled:border-schemes-dark-onSurface dark:disabled:border-opacity-disabled-container'
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          'bg-schemes-light-primary dark:bg-schemes-dark-primary',
          'group-disabled:bg-opacity-0 dark:group-disabled:bg-opacity-0'
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

export default OutlinedButton
