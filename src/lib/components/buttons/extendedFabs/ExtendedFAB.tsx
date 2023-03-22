import clsx from 'clsx'
import { ReactNode } from 'react'
import { Button, ButtonProps } from '../base'

export type ExtendedFABProps = ButtonProps & {
  icon: ReactNode,
  children: ReactNode,
  color?: 'primary' | 'surface' | 'secondary' | 'tertiary'
  size?: 'medium' | 'small' | 'large'
}

const ExtendedFAB = ({
  children,
  icon,
  className,
  color = 'primary',
  ...rest
}: ExtendedFABProps) => {
  return (
    <Button
      className={clsx(
        'group',
        ' h-14 min-w-[80px] rounded-lg flex items-center justify-center pl-4 pr-5',
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
        className={clsx('flex items-center justify-center gap-3',
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
            'h-6 text-2xl [&>.material-symbols-rounded]:text-[24px]'
          )}
        >
          {icon}
        </Button.Icon>
        <Button.Lable className={clsx('label-large')}>{children}</Button.Lable>
      </Button.Content>
    </Button>
  )
}

export default ExtendedFAB
