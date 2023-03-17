import clsx from 'clsx'
import { ReactNode } from 'react'
import Button, { ButtonProps } from './Button'

export type FilledButtonProps = ButtonProps & {
  icon?: ReactNode
}

const FilledButton = ({ icon, children, ...rest }: FilledButtonProps) => {
  return (
    <Button
      className={clsx('group', 'bg-schemes-light-primary dark:bg-schemes-dark-primary', 'hover:shadow-1', 'focus:shadow-[none]')}
      {...rest}
    >
      <Button.StateLayer className={clsx('bg-schemes-light-onPrimary dark:bg-schemes-dark-onPrimary')} />
      <Button.Content className={clsx('text-schemes-light-onPrimary dark:text-schemes-dark-onPrimary')}>
        {icon && <Button.Icon>{icon}</Button.Icon>}
        <Button.Label>{children}</Button.Label>
      </Button.Content>
    </Button>
  )
}

export default FilledButton
