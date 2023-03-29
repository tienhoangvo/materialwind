import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Button, ButtonProps } from '../buttons/base'

export type FilterChipProps = ButtonProps & {
  icon?: ReactNode
  selected?: boolean
  elevated?: boolean
}

const FilterChip = ({
  icon,
  children,
  elevated,
  selected,
  ...rest
}: FilterChipProps) => {
  return (
    <Button
      className={clsx(
        'group',
        'h-8 px-4 rounded-sm ',
        !elevated &&
          !selected &&
          'border border-schemes-light-outline dark:border-schemes-dark-outline bg-surface-light-0 dark:bg-surface-dark-0',
        !elevated &&
          selected &&
          'bg-schemes-light-secondaryContainer dark:bg-schemes-dark-secondaryContainer',
          !elevated &&
          selected &&
          'hover:shadow-1 focus:shadow-[none]',
        elevated && 'shadow-1 bg-surface-light-1 dark:bg-surface-dark-1',
        elevated &&
          'hover:shadow-2 hover:bg-surface-light-2 hover:dark:bg-surface-dark-2',
        elevated &&
          'focus:shadow-1 focus:bg-surface-light-1 focus:dark:bg-surface-dark-1',
        'disabled:border-opacity-disabled-container dark:disabled:border-opacity-disabled-container disabled:shadow-[none]',
        'disabled:bg-[unset] disabled:dark:bg-[unset]'
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          'bg-schemes-light-onSurfaceVariant dark:bg-schemes-dark-onSurfaceVariant',
          'group-disabled:bg-schemes-light-onSurface dark:group-disabled:bg-schemes-dark-onSurface',
          !elevated && !selected && 'group-disabled:opacity-0',
          !elevated && selected && 'group-disabled:opacity-disabled-container',
          
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
              !selected && 'text-schemes-light-onSurfaceVariant dark:text-schemes-dark-onSurfaceVariant',
              selected && 'text-schemes-light-onSecondaryContainer dark:text-schemes-dark-onSecondaryContainer',
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
            !selected && 'text-schemes-light-onSurfaceVariant dark:text-schemes-dark-onSurfaceVariant',
              selected && 'text-schemes-light-onSecondaryContainer dark:text-schemes-dark-onSecondaryContainer',
              'group-disabled:text-schemes-light-onSurface dark:group-disabled:text-schemes-dark-onSurface',
              '[&>*]:text-[18px]'
          )}
        >
          {children}
        </Button.Label>
      </Button.Content>
    </Button>
  )
}

export default FilterChip
