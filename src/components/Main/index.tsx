import * as S from './styles'
import { Input } from '../Input'
import { CharactersTable } from '../CharactersTable'
import { Pagination } from '../Pagination'

import { CharacterListFormatted, heroListFormatter } from '../../utils/heroListFormatter'

import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'

export function Main() {

  const [characterList, setCharacterList] = useState<CharacterListFormatted[]>([])

  useEffect(() => {
    async function fetchData() {
      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?limit=6&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
      ).then((response) => {
        return response.json();
      }).then((jsonParsed) => {
        setCharacterList(heroListFormatter(jsonParsed.data.results))
      })
    }
    fetchData()
  }, [])

  return (
    <S.Container>
      <h1>Busca de personagens</h1>
      <h2>Nome do personagem</h2>
      <Input placeholder="Search" icon={AiOutlineSearch} />
      <CharactersTable list={characterList} />
      <Pagination />
    </S.Container>
  )
}