import clsx from 'clsx'
import { cloneElement, ReactElement, ReactNode } from 'react'
import { IconProps } from '../../icon/Icon'
import { Button, ButtonProps } from '../base'

export type StandardIconButtonProps = Omit<ButtonProps, 'children'> & {
  icon: ReactNode
  toggle?: 'selected' | 'unselected'
}

const StandardIconButton = ({ icon, toggle="unselected", ...rest }: StandardIconButtonProps) => {
  return (
    <Button
      className={clsx(
        'group',
        'h-10 aspect-square rounded-full flex items-center justify-center',
        'disabled:shadow-[none] disabled:bg-none disabled:bg-opacity-0 dark:disabled:bg-opacity-0 dark:disabled:bg-none dark:disabled:shadow-[none]'
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          toggle === 'selected' &&
            'bg-schemes-light-primary dark:bg-schemes-dark-primary',
          toggle === 'unselected' &&
            'bg-schemes-light-onSurfaceVariant  dark:bg-schemes-dark-onSurfaceVariant',
          'group-disabled:opacity-disabled-container group-disabled:bg-schemes-light-onSurface dark:group-disabled:bg-schemes-dark-onSurface',
          toggle === 'unselected' && 'group-disabled:bg-opacity-0 dark:group-disabled:bg-opacity-0'
        )}
      />
      <Button.Content
        className={clsx(
          'inline-block h-6 aspect-square',
          toggle === 'selected' &&
            'text-schemes-light-primary dark:text-schemes-dark-primary',
          toggle === 'unselected' &&
            'text-schemes-light-onSurfaceVariant  dark:text-schemes-dark-onSurfaceVariant',
          'group-disabled:text-schemes-light-onSurface group-disabled:opacity-disabled-content dark:group-disabled:text-schemes-dark-onSurface',
          
        )}
      >
        <Button.Icon
          className={clsx('[&>.material-symbols-rounded]:text-[1.5rem] ')}
        >
          {cloneElement(icon as ReactElement<IconProps>, {
            filled: toggle === 'selected',
          })}
        </Button.Icon>
      </Button.Content>
    </Button>
  )
}

export default StandardIconButton
