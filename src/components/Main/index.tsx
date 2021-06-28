import { useEffect, useState } from 'react'
import { Input } from '../Input'
import { CharactersTable } from '../CharactersTable'
import { Pagination } from '../Pagination'
import { CharacterNotFoundCard } from '../CharacterNotFoundCard'

import { CharacterListFormatted, charListFormatter } from '../../utils/charListFormatter'
import { getAllCharacters, getCharactersByName } from '../../services/api'

import { AiOutlineSearch } from 'react-icons/ai'

import * as S from './styles'

export function Main() {

  const [characterList, setCharacterList] = useState<CharacterListFormatted[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    async function fetchData() {
      getAllCharacters().then((jsonParsed) => {
        setTotalItems(jsonParsed.data.total)
        setCharacterList(charListFormatter(jsonParsed.data.results))
      })
    }
    fetchData()
  }, [])

  function handlePageButton(page: number) {
    const offset = (page - 1) * 4
    getCharactersByName(offset, search).then((jsonParsed) => {
      setTotalItems(jsonParsed.data.total)
      setCharacterList(charListFormatter(jsonParsed.data.results));
    })
    setPage(page)
  }

  function handleSearchButton() {
    const offset = (page - 1) * 4
    getCharactersByName(offset, search).then((jsonParsed) => {
      setTotalItems(jsonParsed.data.total)
      setCharacterList(charListFormatter(jsonParsed.data.results));
    })
    setPage(1)
  }

  return (
    <S.Container>
      <div>
        <h1>Busca de personagens</h1>
        <h2>Nome do personagem</h2>
        <Input
          placeholder="Search"
          icon={AiOutlineSearch}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)}
          onSearch={handleSearchButton}
        />
        {characterList.length > 0
          ?
          <CharactersTable list={characterList} />
          :
          <CharacterNotFoundCard />
        }
      </div>
      {characterList.length > 0 && <Pagination onPageChange={handlePageButton} currentPage={page} totalItems={totalItems} />}
    </S.Container>
  )
}