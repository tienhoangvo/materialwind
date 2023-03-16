import type { HTMLAttributes, ReactNode } from "react"
import { clsx } from 'clsx'
export type ContentIconProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

const ContentIcon = ({ children }: ContentIconProps) => {
  return <span className={clsx('ml-[-0.25rem] mr-2 text-[18px] leading-[1]')}>{children}</span>
}

export default ContentIcon