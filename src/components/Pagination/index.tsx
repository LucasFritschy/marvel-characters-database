import * as S from './styles'
import { PaginationItem } from '../PaginationItem'

import { isMobile } from "react-device-detect";

interface PaginationProps {
  currentPage: number
  totalItems: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalItems, onPageChange }: PaginationProps) {

  const totalPages = Math.ceil(totalItems / 4)

  function generatePagesArray(from: number, to: number) {
    return [...new Array(Math.abs(to - from) + 1)]
      .map((_, index) => {
        return from + index
      })
      .filter((page) => page > 0)
  }

  const previousPages = currentPage === 1 ?
    []
    :
    currentPage === totalPages - 1 ?
      generatePagesArray(currentPage - 3, currentPage - 1)
      :
      currentPage === totalPages ?
        generatePagesArray(currentPage - 4, currentPage - 1)
        :
        generatePagesArray(currentPage - 2, currentPage - 3)


  const nextPages = currentPage >= totalPages ?
    []
    :
    currentPage === 1 ?
      generatePagesArray(currentPage + 1, currentPage + 4)
      : currentPage === 2 ?
        generatePagesArray(currentPage + 1, currentPage + 3)
        :
        currentPage === totalPages - 1 ?
          generatePagesArray(currentPage + 1, currentPage + 1)
          :
          generatePagesArray(currentPage + 1, currentPage + 2)

  return (
    <S.Container>
      {currentPage > 2 && <S.DirButton onClick={() => onPageChange(1)}>{'<<'}</S.DirButton>}
      {currentPage > 1 && <S.DirButton onClick={() => onPageChange(currentPage - 1)}>{'<'}</S.DirButton>}
      {previousPages.length > 0 &&
        previousPages.map((page) => {
          return (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={page}
            />
          )
        })}
      <PaginationItem number={currentPage} onPageChange={onPageChange} isCurrent />
      {nextPages.length > 0 &&
        nextPages.map((page) => {
          return (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={page}
            />
          )
        })}
      {currentPage < totalPages && <S.DirButton onClick={() => onPageChange(currentPage + 1)}>{'>'}</S.DirButton>}
      {currentPage < totalPages - 1 && <S.DirButton onClick={() => onPageChange(totalPages)}>{'>>'}</S.DirButton>}
    </S.Container>
  )
}