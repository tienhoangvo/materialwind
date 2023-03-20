import FAB, { FABProps } from './FAB'

export type SmallFABProps = Omit<FABProps, 'size'>

const SmallFAB = (props: SmallFABProps) => {
  return (
    <FAB
      size="small"
      {...props}
    />
  )
}

export default SmallFAB
