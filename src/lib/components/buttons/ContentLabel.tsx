import { HTMLAttributes, ReactNode } from 'react'
export type ContentLabelProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

const ContentLabel = ({ children, className, ...rest }: ContentLabelProps) => {
  return (
    <span
      className={className}
      {...rest}
    >
      {children}
    </span>
  )
}

export default ContentLabel
