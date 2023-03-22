import type {
  ReactNode,
} from 'react'
import { clsx } from 'clsx'
import Content from './Content'
import StateLayer from './StateLayer'
import ContentIcon from './ContentIcon'
import ContentLabel from './ContentLabel'
import { Button,  type ButtonProps } from '../base'


export type CommonButtonProps = ButtonProps & {
  icon?: ReactNode
}

const CommonButton = ({ className, children, ref, ...rest }: CommonButtonProps) => {
  return (
    <Button
      ref={ref}
      className={clsx(
        'label-large h-10 rounded-full px-6 relative overflow-hidden',
        className,
        'disabled:shadow-[none] disabled:bg-none disabled:bg-opacity-0 dark:disabled:bg-opacity-0 dark:disabled:bg-none dark:disabled:shadow-[none]',
        'transition duration-200'
      )}
      {...rest}
    >
      {children}
    </Button>
  )
}

CommonButton.Content = Content

CommonButton.StateLayer = StateLayer

CommonButton.Icon = ContentIcon

CommonButton.Label = ContentLabel

export default CommonButton
