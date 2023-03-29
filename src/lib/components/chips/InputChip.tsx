import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Button, ButtonProps } from '../buttons/base'

export type InputChipProps = ButtonProps & {
  icon?: ReactNode
}

const InputChip = ({ icon, children }: InputChipProps) => {
  return (
    <Button>
      <Button.StateLayer />
      <Button.Content className={clsx('flex')}>
        {icon && <Button.Icon>{icon}</Button.Icon>}
        <Button.Label>{children}</Button.Label>
      </Button.Content>
    </Button>
  )
}

export default InputChip
