import { ReactNode } from 'react'

export type ComponentContentProps = {
  children: ReactNode
}

const ComponentContent = ({ children }: ComponentContentProps) => {
  return (
    <section className="p-[70px] grid grid-cols-[repeat(auto-fit,_minmax(45%,_1fr))] gap-10">
      {children}
    </section>
  )
}

export default ComponentContent
