import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'
import ContentIcon from './ContentIcon'
import ContentLabel from './ContentLabel'

export type ContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}
const Content = ({ children, className }: ContentProps) => {
  return <div className={clsx('relative z-[1]', className)}>{children}</div>
}

Content.Icon = ContentIcon

Content.Label = ContentLabel

export default Content
