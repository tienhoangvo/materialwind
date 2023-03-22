import clsx from 'clsx'
import { ReactNode } from 'react'
import { Button, ButtonProps } from '../base'

export type SegmentProps = ButtonProps & {
  selected?: boolean
  icon?: ReactNode
  selectedIcon?: ReactNode
}

const Segment = ({
  className,
  children,
  selected = false,
  icon,
  selectedIcon,
  ...rest
}: SegmentProps) => {
  return (
    <Button
      className={clsx(
        'group',
        'h-full border-schemes-light-outline dark:border-schemes-dark-outline',
        selected &&
          'bg-schemes-light-secondaryContainer dark:bg-schemes-dark-secondaryContainer',
        'flex px-3 items-center justify-center',
        className
      )}
      {...rest}
    >
      <Button.StateLayer
        className={clsx(
          !selected &&
            'bg-schemes-light-onSurface dark:bg-schemes-dark-onSurface',
          selected &&
            'bg-schemes-light-onSecondaryContainer dark:bg-schemes-dark-onSecondaryContainer'
        )}
      />
      <Button.Content
        className={clsx(
          !selected &&
            'text-schemes-light-onSurface dark:text-schemes-dark-onSurface',
          selected &&
            'text-schemes-light-onSecondaryContainer dark:text-schemes-dark-onSecondaryContainer',
          'flex gap-2 items-center'
        )}
      >
        {(selectedIcon || icon) && (
          <Button.Icon className={clsx('h-6 aspect-square')}>
            {selected ? selectedIcon : icon}
          </Button.Icon>
        )}

        <Button.Lable className={clsx('label-large')}>{children}</Button.Lable>
      </Button.Content>
    </Button>
  )
}

export default Segment
