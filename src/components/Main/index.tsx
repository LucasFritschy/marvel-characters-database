import * as S from './styles'
import { Input } from '../Input'
import { CharactersTable } from '../CharactersTable'
import { Pagination } from '../Pagination'

import { CharacterListFormatted, heroListFormatter } from '../../utils/heroListFormatter'

import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'

export function Main() {

  const [characterList, setCharacterList] = useState<CharacterListFormatted[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)


  useEffect(() => {
    async function fetchData() {
      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?limit=4&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
      ).then((response) => {
        return response.json();
      }).then((jsonParsed) => {
        setTotalItems(jsonParsed.data.total)
        setCharacterList(heroListFormatter(jsonParsed.data.results))
      })
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const offset = (page - 1) * 4
      search !== '' ?
        offset === 0 ?
          fetch(
            `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&limit=4&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
          ).then((response) => {
            return response.json();
          }).then((jsonParsed) => {
            setCharacterList(heroListFormatter(jsonParsed.data.results))
          })
          :
          fetch(
            `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&limit=4&offset=${offset}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
          ).then((response) => {
            return response.json();
          }).then((jsonParsed) => {
            setTotalItems(jsonParsed.data.total)
            setCharacterList(heroListFormatter(jsonParsed.data.results));
          })
        :
        offset === 0 ?
          fetch(
            `https://gateway.marvel.com:443/v1/public/characters?limit=4&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
          ).then((response) => {
            return response.json();
          }).then((jsonParsed) => {
            setCharacterList(heroListFormatter(jsonParsed.data.results))
          })
          :
          fetch(
            `https://gateway.marvel.com:443/v1/public/characters?limit=4&offset=${offset}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
          ).then((response) => {
            return response.json();
          }).then((jsonParsed) => {
            setCharacterList(heroListFormatter(jsonParsed.data.results))
          })
    }
    fetchData()
  }, [page])

  useEffect(() => {
    async function fetchData() {
      const offset = (page - 1) * 4
      search !== '' ?
        offset === 0 ?
          fetch(
            `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&limit=4&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
          ).then((response) => {
            return response.json();
          }).then((jsonParsed) => {
            setCharacterList(heroListFormatter(jsonParsed.data.results))
          })
          :
          fetch(
            `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&limit=4&offset=${offset}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
          ).then((response) => {
            return response.json();
          }).then((jsonParsed) => {
            setTotalItems(jsonParsed.data.total)
            setCharacterList(heroListFormatter(jsonParsed.data.results))
            setPage(1)
          })
        :
        offset === 0 ?
          fetch(
            `https://gateway.marvel.com:443/v1/public/characters?limit=4&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
          ).then((response) => {
            return response.json();
          }).then((jsonParsed) => {
            setCharacterList(heroListFormatter(jsonParsed.data.results))
          })
          :
          fetch(
            `https://gateway.marvel.com:443/v1/public/characters?limit=4&offset=${offset}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
          ).then((response) => {
            return response.json();
          }).then((jsonParsed) => {
            setCharacterList(heroListFormatter(jsonParsed.data.results))
            setPage(1)
          })
    }
    fetchData()
  }, [search])

  return (
    <S.Container>
      <h1>Busca de personagens</h1>
      <h2>Nome do personagem</h2>
      <Input placeholder="Search" icon={AiOutlineSearch} onChange={(e: React.FormEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)} />
      <CharactersTable list={characterList} />
      <Pagination onPageChange={setPage} currentPage={page} totalItems={totalItems} />
    </S.Container>
  )
}