import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { isMobile } from "react-device-detect";
import { CharacterInfoFormatted } from '../../utils/charInfoFormatter'
import { charInfoFormatter } from '../../utils/charInfoFormatter'
import { getCharacterById } from '../../services/api'
import * as S from './styles'

export function CharacterDetail() {
  const history = useHistory()

  const { id } = useParams<{ id: string }>()
  const charId = parseInt(id.replace(/[^0-9]/g, ''))

  const [charInfo, setCharInfo] = useState<CharacterInfoFormatted[] | null>()

  useEffect(() => {
    async function fetchData() {
      getCharacterById(charId).then((jsonParsed) => {
        setCharInfo(charInfoFormatter(jsonParsed.data.results))
      })
    }
    fetchData()
  }, [charId])

  return (
    <S.Container>
      <div>
        {charInfo?.map(({ id, name, description, desktopThumbnail, detailsLink, mobileThumbnail }: CharacterInfoFormatted) => (
          <>
            <S.CharProfile key={id}>
              <h1>{name}</h1>
              <img src={isMobile ? mobileThumbnail : desktopThumbnail} alt={name} />
            </S.CharProfile>
            <S.CharDescription>
              <h3>Description</h3>
              <span>
                {description ? description : 'Description not available.'}
              </span>
              {detailsLink && <a href={detailsLink} target="_blank" rel='noreferrer'>More Information</a>}
            </S.CharDescription>
          </>
        ))}
      </div>
      <S.IconContainer onClick={() => history.push('/')}>
        <AiOutlineArrowLeft size={24} />
        <span>Back to main page</span>
      </S.IconContainer>
    </S.Container>
  )
}