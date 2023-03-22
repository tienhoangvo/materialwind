import clsx from 'clsx'
import { cloneElement, ReactElement, ReactNode } from 'react'
import { IconProps } from '../../icon/Icon'
import { Button, ButtonProps } from '../base'

export type OutlinedIconButtonProps = Omit<ButtonProps, 'children'> & {
  icon: ReactNode
  toggle?: 'selected' | 'unselected'
}

const OutlinedIconButton = ({
  icon,
  toggle = 'unselected',
  ...rest
}: OutlinedIconButtonProps) => {
  return (
    <Button
      className={clsx(
        'group',
        'h-10 aspect-square rounded-full flex items-center justify-center',
        toggle === 'selected' &&
          'bg-schemes-light-inverseSurface  dark:bg-schemes-dark-inverseSurface',
        toggle === 'unselected' &&
          'border border-schemes-light-outline  dark:border-schemes-dark-outline',
        'disabled:shadow-[none] disabled:bg-none disabled:bg-opacity-0 dark:disabled:bg-opacity-0 dark:disabled:bg-none dark:disabled:shadow-[none]',
        'disabled:border-opacity-disabled-container dark:disabled:border-opacity-disabled-container'
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          toggle === 'selected' &&
            'bg-schemes-light-onInverseSurface dark:bg-schemes-dark-onInverseSurface',
          toggle === 'unselected' &&
            'bg-schemes-light-onSurfaceVariant  dark:bg-schemes-dark-onSurfaceVariant',
          'group-disabled:opacity-disabled-container group-disabled:bg-schemes-light-onSurface dark:group-disabled:bg-schemes-dark-onSurface',
          toggle === 'unselected' &&
            'group-disabled:bg-opacity-0 dark:group-disabled:bg-opacity-0'
        )}
      />
      <Button.Content
        className={clsx(
          'inline-block h-6 aspect-square',
          toggle === 'selected' &&
            'text-schemes-light-onInverseSurface dark:text-schemes-dark-onInverseSurface',
          toggle === 'unselected' &&
            'text-schemes-light-onSurfaceVariant  dark:text-schemes-dark-onSurfaceVariant',
          'group-disabled:text-schemes-light-onSurface group-disabled:opacity-disabled-content dark:group-disabled:text-schemes-dark-onSurface'
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

export default OutlinedIconButton
