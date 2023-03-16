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
        'bg-surface-light-1 shadow-1',
        'hover:bg-surface-light-1 hover:shadow-2',
        'focus:bg-surface-light-1 focus:shadow-1',
        'disabled:bg-schemes-light-onSurface disabled:bg-opacity-disabled-container disabled:shadow-[none]',
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          'bg-schemes-light-primary',
          'group-hover:opacity-hovered',
          'group-focus:opacity-focused',
          'group-disabled:opacity-0'
        )}
      />
      <Button.Content
        className={clsx(
          'text-schemes-light-primary',
          'group-disabled:text-schemes-light-onSurface group-disabled:opacity-disabled-content'
        )}
      >
        {icon && <Button.Icon>{icon}</Button.Icon>}
        <Button.Label>{children}</Button.Label>
      </Button.Content>
    </Button>
  )
}

export default ElevatedButton
