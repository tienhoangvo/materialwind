import { clsx } from 'clsx'
import { ButtonContent, type ButtonContentProps } from '../base'

export type ContentProps = ButtonContentProps
const Content = ({ children, className }: ContentProps) => {
  return (
    <ButtonContent
      className={clsx(
        'flex items-center',
        className,
        'group-disabled:text-schemes-light-onSurface group-disabled:opacity-disabled-content dark:group-disabled:text-schemes-dark-onSurface'
      )}
    >
      {children}
    </ButtonContent>
  )
}
export default Content
