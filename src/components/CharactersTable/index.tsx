import * as S from './styles'
import { CharacterListFormatted } from '../../utils/heroListFormatter'

interface CharactersTableProps {
  list: CharacterListFormatted[]
}

export function CharactersTable({ list }: CharactersTableProps) {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Personagem</th>
          <th>Séries</th>
          <th>Eventos</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, name, series, events, thumbnail }) => (
          <tr key={id}>
            <td>
              <S.CharBox>
                <img src={thumbnail} alt={name} />
                <span><strong>{name}</strong></span>
              </S.CharBox>
            </td>
            <td>
              <S.TextBox>
                {series.slice(0, 3).map((serie) => {
                  return <span key={serie}>{serie}</span>
                })}
              </S.TextBox>
            </td>
            <td>
              <S.TextBox>
                {events.slice(0, 3).map((event) => {
                  return <span key={event}>{event}</span>
                })}
              </S.TextBox>
            </td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  )
}