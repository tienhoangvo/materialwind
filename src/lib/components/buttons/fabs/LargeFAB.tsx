import FAB, { FABProps } from './FAB'

export type LargeFABProps = Omit<FABProps, 'size'>

const LargeFAB = (props: LargeFABProps) => {
  return (
    <FAB
      size="large"
      {...props}
    />
  )
}

export default LargeFAB
