import * as S from './styles'
import { CharacterListFormatted } from '../../utils/heroListFormatter'

import { isMobile } from "react-device-detect";
import { useHistory } from "react-router-dom";

interface CharactersTableProps {
  list: CharacterListFormatted[]
}

export function CharactersTable({ list }: CharactersTableProps) {

  let history = useHistory()

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
          <tr key={id} onClick={() => history.push(`/character/id=${id}`)}>
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
                    {series.map((serie, index) => {
                      return <span key={index}>{serie}</span>
                    })}
                  </S.TextBox>
                </td>
                <td>
                  <S.TextBox>
                    {events.map((event, index) => {
                      return <span key={index}>{event}</span>
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