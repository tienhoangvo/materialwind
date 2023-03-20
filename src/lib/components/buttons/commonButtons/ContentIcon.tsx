import { clsx } from 'clsx'
import { ButtonIcon, type ButtonIconProps } from '../base'
export type ContentIconProps = ButtonIconProps

const ContentIcon = ({ children }: ContentIconProps) => {
  return (
    <ButtonIcon
      className={clsx(
        ' inline-block ml-[-0.25rem] mr-2 [&>*]:text-[18px]'
      )}
    >
      {children}
    </ButtonIcon>
  )
}

export default ContentIcon
