import * as S from './styles'
import photo from '../../assets/photo.png'

export function CharactersTable() {
  return (
    <S.Table>
      <tr>
        <th>Personagem</th>
        <th>Séries</th>
        <th>Eventos</th>
      </tr>
      <tr>
        <td>
          <S.CharBox>
            <img src={photo} alt="abner" />
            <span><strong>Abner Jenkins</strong></span>
          </S.CharBox>
        </td>
        <td>
          <S.TextBox>
            <span>Iron Man: Armor Wars</span>
            <span>Old Man Hawkeye</span>
            <span>Fantastic Four Visionaries: Walter Simonson Vol. 1</span>
          </S.TextBox>
        </td>
        <td>
          <S.TextBox>
            <span>AvX</span>
            <span>Demon in the Bottle</span>
            <span>Dynasty M</span>
          </S.TextBox>
        </td>
      </tr>
      <tr>
        <td>
          <S.CharBox>
            <img src={photo} alt="abner" />
            <span><strong>Abner Jenkins</strong></span>
          </S.CharBox>
        </td>
        <td>
          <S.TextBox>
            <span>Iron Man: Armor Wars</span>
            <span>Old Man Hawkeye</span>
            <span>Fantastic Four Visionaries: Walter Simonson Vol. 1</span>
          </S.TextBox>
        </td>
        <td>
          <S.TextBox>
            <span>AvX</span>
            <span>Demon in the Bottle</span>
            <span>Dynasty M</span>
          </S.TextBox>
        </td>
      </tr>
      <tr>
        <td>
          <S.CharBox>
            <img src={photo} alt="abner" />
            <span><strong>Abner Jenkins</strong></span>
          </S.CharBox>
        </td>
        <td>
          <S.TextBox>
            <span>Iron Man: Armor Wars</span>
            <span>Old Man Hawkeye</span>
            <span>Fantastic Four Visionaries: Walter Simonson Vol. 1</span>
          </S.TextBox>
        </td>
        <td>
          <S.TextBox>
            <span>AvX</span>
            <span>Demon in the Bottle</span>
            <span>Dynasty M</span>
          </S.TextBox>
        </td>
      </tr>
      <tr>
        <td>
          <S.CharBox>
            <img src={photo} alt="abner" />
            <span><strong>Abner Jenkins</strong></span>
          </S.CharBox>
        </td>
        <td>
          <S.TextBox>
            <span>Iron Man: Armor Wars</span>
            <span>Old Man Hawkeye</span>
            <span>Fantastic Four Visionaries: Walter Simonson Vol. 1</span>
          </S.TextBox>
        </td>
        <td>
          <S.TextBox>
            <span>AvX</span>
            <span>Demon in the Bottle</span>
            <span>Dynasty M</span>
          </S.TextBox>
        </td>
      </tr>

    </S.Table>
  )
}