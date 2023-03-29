import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Button, ButtonProps } from '../buttons/base'

export type AssistChipProps = ButtonProps & {
  icon?: ReactNode
  elevated?: boolean
}

const AssistChip = ({ icon, children, elevated, ...rest }: AssistChipProps) => {
  return (
    <Button
      className={clsx(
        'group',
        'h-8 px-4 rounded-sm ',
        !elevated &&
          'border border-schemes-light-outline dark:border-schemes-dark-outline bg-schemes-light-surface dark:bg-schemes-dark-surface',
        elevated && 'shadow-1 bg-surface-light-1 dark:bg-surface-dark-1',
        elevated &&
          'hover:shadow-2 hover:bg-surface-light-2 hover:dark:bg-surface-dark-2',
        elevated &&
          'focus:shadow-1 focus:bg-surface-light-1 focus:dark:bg-surface-dark-1',
        'disabled:border-opacity-disabled-container dark:disabled:border-opacity-disabled-container disabled:shadow-[none]',
        elevated && 'disabled:bg-none disabled:dark:bg-none'
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          'bg-schemes-light-onSurface dark:bg-schemes-dark-onSurface',
          !elevated && 'group-disabled:opacity-0',
          elevated && 'group-disabled:opacity-disabled-container'
        )}
      />
      <Button.Content
        className={clsx(
          'flex  gap-2 items-center justify-center',
          'group-disabled:opacity-disabled-content'
        )}
      >
        {icon && (
          <Button.Icon
            className={clsx(
              'ml-[-.5rem]',
              'text-schemes-light-primary',
              'dark:text-schemes-dark-primary',
              'group-disabled:text-schemes-light-onSurface dark:group-disabled:text-schemes-dark-onSurface',
              '[&>*]:text-[18px]'
            )}
          >
            {icon}
          </Button.Icon>
        )}
        <Button.Label
          className={clsx(
            'label-large',
            'text-schemes-light-onSurface dark:text-schemes-dark-onSurface'
          )}
        >
          {children}
        </Button.Label>
      </Button.Content>
    </Button>
  )
}

export default AssistChip
