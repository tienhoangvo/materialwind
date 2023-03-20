import clsx from 'clsx'
import { ButtonLabel, ButtonLabelProps } from '../base'
export type ContentLabelProps = ButtonLabelProps

const ContentLabel = ({ children, className, ...rest }: ContentLabelProps) => {
  return (
    <ButtonLabel
      className={clsx(className)}
      {...rest}
    >
      {children}
    </ButtonLabel>
  )
}

export default ContentLabel
