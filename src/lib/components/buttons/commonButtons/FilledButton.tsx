import clsx from 'clsx'
import CommonButton, { CommonButtonProps } from './CommonButton'

export type FilledButtonProps = CommonButtonProps

const FilledButton = ({
  icon,
  children,
  ref,
  className,
  ...rest
}: FilledButtonProps) => {
  return (
    <CommonButton
      ref={ref}
      className={clsx(
        'group',
        'bg-schemes-light-primary dark:bg-schemes-dark-primary',
        'hover:shadow-1',
        'focus:shadow-[none]',
        className
      )}
      {...rest}
    >
      <CommonButton.StateLayer
        className={clsx(
          'bg-schemes-light-onPrimary dark:bg-schemes-dark-onPrimary'
        )}
      />
      <CommonButton.Content
        className={clsx(
          'text-schemes-light-onPrimary dark:text-schemes-dark-onPrimary'
        )}
      >
        {icon && <CommonButton.Icon>{icon}</CommonButton.Icon>}
        <CommonButton.Label>{children}</CommonButton.Label>
      </CommonButton.Content>
    </CommonButton>
  )
}

export default FilledButton
