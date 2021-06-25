import * as S from './styles'
import { Input } from '../Input'

import { AiOutlineSearch } from 'react-icons/ai'

export function Main() {
  return (
    <S.Container>
      <h1>Busca de personagens</h1>
      <h2>Nome do personagem</h2>
      <Input placeholder="Search" icon={AiOutlineSearch} />
    </S.Container>
  )
}