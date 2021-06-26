import * as S from './styles'
import { PaginationItem } from '../PaginationItem'

export function Pagination() {
  return (
    <S.Container>
      <PaginationItem value={1} active />
      <PaginationItem value={2} />
      <PaginationItem value={3} />
      <PaginationItem value={4} />
      <PaginationItem value={5} />
      <S.DirButton>{'>'}</S.DirButton>
      <S.DirButton>{'>>'}</S.DirButton>
    </S.Container>
  )
}