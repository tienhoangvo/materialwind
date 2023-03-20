export type ComponentHeaderProps = {
  heading: string
  description: string
}

const ComponentHeader = ({ heading, description }: ComponentHeaderProps) => {
  return (
    <header className="p-[52px_52px_70px] bg-primary-80 text-test bg-surface-light-5 text-schemes-light-onSurface">
      <h1 className="display-large">{heading}</h1>
      <p className="body-medium">{description}</p>
    </header>
  )
}

export default ComponentHeader
