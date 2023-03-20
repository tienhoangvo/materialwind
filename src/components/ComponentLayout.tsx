import { ReactNode } from "react"

export type ComponentLayoutProps = {
  children?: ReactNode
}

const ComponentLayout = ({ children }: ComponentLayoutProps) => {
  return (
    <article className="overflow-hidden rounded-xl bg-surface-light-1 bg-opacity-hovered">
      {children}
    </article>
  )
}

export default ComponentLayout
