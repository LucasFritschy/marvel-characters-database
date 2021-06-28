import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
  onSearch: () => void
}

export function Input({ icon: Icon, onSearch, ...rest }: InputProps) {
  return (
    <S.Container >
      <input {...rest} />
      <button onClick={() => onSearch()}>
        {Icon && <Icon size={18} />}
      </button>
    </S.Container>
  )
}