import clsx from 'clsx'
import { cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react'
import { Button, ButtonProps } from '../base'
type IconProps = HTMLAttributes<HTMLSpanElement> & {
  name: string
  filled?: boolean
}
export type FilledIconButtonProps = Omit<ButtonProps, 'children'> & {
  icon: ReactNode
  toggle?: 'selected' | 'unselected'
}

const FilledIconButton = ({ icon, toggle, ...rest }: FilledIconButtonProps) => {
  return (
    <Button
      className={clsx(
        'group',
        'h-10 aspect-square rounded-full flex items-center justify-center',
        'bg-schemes-light-primary  dark:bg-schemes-dark-primary',
        toggle === 'selected' &&
          'bg-schemes-light-primary dark:bg-schemes-dark-primary',
        toggle === 'unselected' &&
          'bg-schemes-light-surfaceVariant  dark:bg-schemes-dark-surfaceVariant',
        'disabled:shadow-[none] disabled:bg-none disabled:bg-opacity-0 dark:disabled:bg-opacity-0 dark:disabled:bg-none dark:disabled:shadow-[none]'
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          'bg-schemes-light-onPrimary dark:bg-schemes-dark-onPrimary',
          toggle === 'selected' &&
            'bg-schemes-light-onPrimary dark:bg-schemes-dark-onPrimary',
          toggle === 'unselected' &&
            'bg-schemes-light-primary  dark:bg-schemes-dark-primary',
          'group-disabled:opacity-disabled-container group-disabled:bg-schemes-light-onSurface dark:group-disabled:bg-schemes-dark-onSurface'
        )}
      />
      <Button.Content
        className={clsx(
          'inline-block h-6 aspect-square text-schemes-light-onPrimary dark:text-schemes-dark-onPrimary',
          toggle === 'selected' &&
            'text-schemes-light-onPrimary dark:text-schemes-dark-onPrimary',
          toggle === 'unselected' &&
            'text-schemes-light-primary  dark:text-schemes-dark-primary',
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

export default FilledIconButton
