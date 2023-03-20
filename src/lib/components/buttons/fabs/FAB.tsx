import clsx from 'clsx'
import { ReactNode } from 'react'
import { Button, ButtonProps } from '../base'

export type FABProps = ButtonProps & {
  icon: ReactNode
  color?: 'primary' | 'surface' | 'secondary' | 'tertiary'
  size?: 'medium' | 'small' | 'large'
}

const FAB = ({
  children,
  icon,
  className,
  color = 'primary',
  size = 'medium',
  ...rest
}: FABProps) => {
  return (
    <Button
      className={clsx(
        'group',
        'aspect-square flex items-center justify-center',
        size === 'medium' && 'h-14 rounded-lg',
        size === 'large' && 'h-24 rounded-lg',
        size === 'small' && 'h-10 rounded-md',
        'shadow-3',
        'hover:shadow-4',
        'focus:shadow-3',
        color === 'primary' &&
          'bg-schemes-light-primaryContainer dark:bg-schemes-dark-primaryContainer',
        color === 'secondary' &&
          'bg-schemes-light-secondaryContainer dark:bg-schemes-dark-secondaryContainer',
        color === 'tertiary' &&
          'bg-schemes-light-tertiaryContainer dark:bg-schemes-dark-tertiaryContainer',
        color === 'surface' &&
          'bg-surface-light-3 dark:bg-surface-dark-3 hover:bg-surface-light-4 dark:hover:bg-surface-dark-4 focus:bg-surface-light-3 dark:focus:bg-surface-dark-3',
        className
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          color === 'primary' &&
            'bg-schemes-light-onPrimaryContainer dark:bg-schemes-dark-onPrimaryContainer',
          color === 'secondary' &&
            'bg-schemes-light-onSecondaryContainer dark:bg-schemes-dark-onSecondaryContainer',
          color === 'tertiary' &&
            'bg-schemes-light-onTertiaryContainer dark:bg-schemes-dark-onTertiaryContainer',
          color === 'surface' &&
            'bg-schemes-light-primary dark:bg-schemes-dark-primary'
        )}
      />
      <Button.Content
        className={clsx(
          color === 'primary' &&
            'text-schemes-light-onPrimaryContainer dark:text-schemes-dark-onPrimaryContainer',
          color === 'secondary' &&
            'text-schemes-light-onSecondaryContainer dark:text-schemes-dark-onSecondaryContainer',
          color === 'tertiary' &&
            'text-schemes-light-onTertiaryContainer dark:text-schemes-dark-onTertiaryContainer',
          color === 'surface' &&
            'text-schemes-light-primary dark:text-schemes-dark-primary'
        )}
      >
        <Button.Icon
          className={clsx(
            size === 'medium' && 'h-6 text-2xl [&>*]:text-2xl',
            size === 'large' && 'h-9 [&>*]:text-4xl',
            size === 'small' && 'h-6 text-2xl [&>*]:text-2xl'
          )}
        >
          {icon || children}
        </Button.Icon>
      </Button.Content>
    </Button>
  )
}

export default FAB
