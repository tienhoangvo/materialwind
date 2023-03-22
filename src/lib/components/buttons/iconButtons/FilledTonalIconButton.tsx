import clsx from 'clsx'
import { cloneElement, ReactElement, ReactNode } from 'react'
import type { IconProps } from '../../icon'
import { Button, ButtonProps } from '../base'

export type FilledTonalIconButtonProps = Omit<ButtonProps, 'children'> & {
  icon: ReactNode
  toggle?: 'selected' | 'unselected'
}
const FilledTonalIconButton = ({ icon, toggle, ...rest }: FilledTonalIconButtonProps) => {
  return (
    <Button
      className={clsx(
        'group',
        'h-10 aspect-square rounded-full flex items-center justify-center',
        'bg-schemes-light-secondaryContainer  dark:bg-schemes-dark-secondaryContainer',
        toggle === 'selected' &&
          'bg-schemes-light-secondaryContainer dark:bg-schemes-dark-secondaryContainer',
        toggle === 'unselected' &&
          'bg-schemes-light-surfaceVariant  dark:bg-schemes-dark-surfaceVariant',
        'disabled:shadow-[none] disabled:bg-none disabled:bg-opacity-0 dark:disabled:bg-opacity-0 dark:disabled:bg-none dark:disabled:shadow-[none]'
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          'bg-schemes-light-onSecondaryContainer dark:bg-schemes-dark-onSecondaryContainer',
          toggle === 'selected' &&
            'bg-schemes-light-onSecondaryContainer dark:bg-schemes-dark-onSecondaryContainer',
          toggle === 'unselected' &&
            'bg-schemes-light-onSurfaceVariant  dark:bg-schemes-dark-onSurfaceVariant',
          'group-disabled:opacity-disabled-container group-disabled:bg-schemes-light-onSurface dark:group-disabled:bg-schemes-dark-onSurface'
        )}
      />
      <Button.Content
        className={clsx(
          'inline-block h-6 aspect-square',
          'text-schemes-light-onSecondaryContainer dark:text-schemes-dark-onSecondaryContainer',
          toggle === 'selected' &&
            'text-schemes-light-onSecondaryContainer dark:text-schemes-dark-onSecondaryContainer',
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

export default FilledTonalIconButton
