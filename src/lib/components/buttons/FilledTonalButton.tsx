import clsx from 'clsx'
import { ReactNode } from 'react'
import Button, { ButtonProps } from './Button'

export type FilledTonalButtonProps = ButtonProps & {
  icon?: ReactNode
}

const FilledTonalButton = ({ icon, children, ...rest }: FilledTonalButtonProps) => {
  return (
    <Button
      className={clsx('group', 'bg-schemes-light-secondaryContainer dark:bg-schemes-dark-secondaryContainer', 'hover:shadow-1', 'focus:shadow-[none]')}
      {...rest}
    >
      <Button.StateLayer className={clsx('bg-schemes-light-onSecondaryContainer dark:bg-schemes-dark-onSecondaryContainer')} />
      <Button.Content className={clsx('text-schemes-light-onSecondaryContainer dark:text-schemes-dark-onSecondaryContainer')}>
        {icon && <Button.Icon>{icon}</Button.Icon>}
        <Button.Label>{children}</Button.Label>
      </Button.Content>
    </Button>
  )
}

export default FilledTonalButton
