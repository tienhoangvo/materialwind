import type { ReactNode } from 'react'
import { Button, ButtonProps } from '../buttons/base'

export type SuggestionChipProps = ButtonProps & {
  icon?: ReactNode
}

const SuggestionChip = ({ icon, children }: SuggestionChipProps) => {
  return (
    <Button>
      <Button.StateLayer />
      <Button.Content>
        {icon && <Button.Icon>{icon}</Button.Icon>}
        <Button.Label>{children}</Button.Label>
      </Button.Content>
    </Button>
  )
}

export default SuggestionChip
