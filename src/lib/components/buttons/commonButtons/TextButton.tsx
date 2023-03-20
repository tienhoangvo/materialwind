import clsx from 'clsx'
import CommonButton, { CommonButtonProps } from './CommonButton'

export type TextButtonProps = CommonButtonProps

const TextButton = ({
  icon,
  children,
  ref,
  className,
  ...rest
}: TextButtonProps) => {
  return (
    <CommonButton
      ref={ref}
      className={clsx(
        'group',
        'bg-[unset] dark:bg-[unset]',
        'focus:shadow-[none]',
        'pr-4 pl-4',
        className
      )}
      {...rest}
    >
      <CommonButton.StateLayer
        className={clsx(
          'bg-schemes-light-primary dark:bg-schemes-dark-primary',
          'group-disabled:opacity-0 dark:group-disabled:opacity-0'
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

export default TextButton
