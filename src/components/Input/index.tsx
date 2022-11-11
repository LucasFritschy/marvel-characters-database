import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType
  onSearch: () => void
}

export function Input({ icon: Icon, onSearch, ...rest }: InputProps) {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSearch();
  }

  return (
    <S.Container >
      <form onSubmit={handleSubmit}>
        <input {...rest} />
        <button type="submit">
          {Icon && <Icon size={18} />}
        </button>
      </form>

    </S.Container>
  )
}