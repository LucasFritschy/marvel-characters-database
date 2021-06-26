import * as S from './styles'

interface PaginationItemProps {
  value: number
  active?: boolean
}

export function PaginationItem({ value, active = false }: PaginationItemProps) {
  return (
    <S.Container isActive={active}>
      {value}
    </S.Container>
  )
}