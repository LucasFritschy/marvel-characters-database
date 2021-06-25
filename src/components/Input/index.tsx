import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  return (
    <S.Container>
      <input {...rest} />
      {Icon && <Icon size={18} />}
    </S.Container>
  )
}