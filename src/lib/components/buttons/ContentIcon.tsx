import type { HTMLAttributes, ReactNode } from "react"
import { clsx } from 'clsx'
export type ContentIconProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

const ContentIcon = ({ children }: ContentIconProps) => {
  return <span className={clsx(' inline-block ml-[-0.25rem] mr-2 h-[18px] w-[18px] leading-[1] [&>.material-symbols-rounded]:text-[18px]')}>{children}</span>
}

export default ContentIcon