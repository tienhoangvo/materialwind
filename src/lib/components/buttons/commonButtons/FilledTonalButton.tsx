import clsx from 'clsx'
import CommonButton, { CommonButtonProps } from './CommonButton'

export type FilledTonalButtonProps = CommonButtonProps

const FilledTonalButton = ({
  icon,
  children,
  ref,
  className,
  ...rest
}: FilledTonalButtonProps) => {
  return (
    <CommonButton
      ref={ref}
      className={clsx(
        'group',
        'bg-schemes-light-secondaryContainer dark:bg-schemes-dark-secondaryContainer',
        'hover:shadow-1',
        'focus:shadow-[none]',
        className
      )}
      {...rest}
    >
      <CommonButton.StateLayer
        className={clsx(
          'bg-schemes-light-onSecondaryContainer dark:bg-schemes-dark-onSecondaryContainer'
        )}
      />
      <CommonButton.Content
        className={clsx(
          'text-schemes-light-onSecondaryContainer dark:text-schemes-dark-onSecondaryContainer'
        )}
      >
        {icon && <CommonButton.Icon>{icon}</CommonButton.Icon>}
        <CommonButton.Label>{children}</CommonButton.Label>
      </CommonButton.Content>
    </CommonButton>
  )
}

export default FilledTonalButton
