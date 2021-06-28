import * as S from './styles'

interface PaginationItemProps {
  number: number
  onPageChange: (page: number) => void
  isCurrent?: boolean
}

export function PaginationItem({ number, isCurrent = false, onPageChange }: PaginationItemProps) {
  return (
    <S.Container disabled={isCurrent} isCurrent={isCurrent} onClick={() => onPageChange(number)}>
      {number}
    </S.Container>
  )
}