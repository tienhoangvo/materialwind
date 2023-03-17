import clsx from 'clsx'
import { ReactNode } from 'react'
import Button, { ButtonProps } from './Button'

export type TextButtonProps = ButtonProps & {
  icon?: ReactNode
}

const TextButton = ({ icon, children, ...rest }: TextButtonProps) => {
  return (
    <Button
      className={clsx(
        'group',
        'bg-[unset] dark:bg-[unset]',
        'focus:shadow-[none]',
        'pr-4 pl-4'
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          'bg-schemes-light-primary dark:bg-schemes-dark-primary',
          'group-disabled:opacity-0 dark:group-disabled:opacity-0'
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

export default TextButton
