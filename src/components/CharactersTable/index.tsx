import * as S from './styles'
import { CharacterListFormatted } from '../../utils/heroListFormatter'

import { isMobile } from "react-device-detect";

interface CharactersTableProps {
  list: CharacterListFormatted[]
}

export function CharactersTable({ list }: CharactersTableProps) {
  return (
    <S.Table>
      <thead>
        <tr>
          {isMobile ?
            <>
              <th></th>
              <th>Personagem</th>
            </>
            :
            <>
              <th>Personagem</th>
              <th></th>
              <th>Séries</th>
              <th>Eventos</th>
            </>}
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, name, series, events, thumbnail }) => (
          <tr key={id}>
            <td>
              <S.CharBox>
                <img src={thumbnail} alt={name} />
              </S.CharBox>
            </td>
            <td>
              <S.TextBox>
                <span><strong>{name}</strong></span>
              </S.TextBox>
            </td>
            {!isMobile &&
              <>
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
              </>
            }
          </tr>
        ))}
      </tbody>
    </S.Table>
  )
}