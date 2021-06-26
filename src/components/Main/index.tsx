import * as S from './styles'
import { Input } from '../Input'
import { CharactersTable } from '../CharactersTable'
import { Pagination } from '../Pagination'

import { AiOutlineSearch } from 'react-icons/ai'

export function Main() {
  return (
    <S.Container>
      <h1>Busca de personagens</h1>
      <h2>Nome do personagem</h2>
      <Input placeholder="Search" icon={AiOutlineSearch} />
      <CharactersTable />
      <Pagination />
    </S.Container>
  )
}