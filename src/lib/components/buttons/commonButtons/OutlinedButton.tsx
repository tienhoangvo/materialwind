import clsx from 'clsx'
import CommonButton, { CommonButtonProps } from './CommonButton'

export type OutlinedButtonProps = CommonButtonProps

const OutlinedButton = ({
  icon,
  children,
  ref,
  className,
  ...rest
}: OutlinedButtonProps) => {
  return (
    <CommonButton
      ref={ref}
      className={clsx(
        'group',
        'bg-[unset] dark:bg-[unset]',
        'border border-schemes-light-outline dark:border-schemes-dark-outline',
        'focus:shadow-[none]',
        'disabled:border-schemes-light-onSurface disabled:border-opacity-disabled-container dark:disabled:border-schemes-dark-onSurface dark:disabled:border-opacity-disabled-container',
        className
      )}
      {...rest}
    >
      <CommonButton.StateLayer
        className={clsx(
          'bg-schemes-light-primary dark:bg-schemes-dark-primary',
          'group-disabled:bg-opacity-0 dark:group-disabled:bg-opacity-0'
        )}
      />
      <CommonButton.Content
        className={clsx(
          'text-schemes-light-primary dark:text-schemes-dark-primary'
        )}
      >
        {icon && <CommonButton.Icon>{icon}</CommonButton.Icon>}
        <CommonButton.Label>{children}</CommonButton.Label>
      </CommonButton.Content>
    </CommonButton>
  )
}

export default OutlinedButton
