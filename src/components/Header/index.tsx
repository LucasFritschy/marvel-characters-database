import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <h1>Objective</h1>
      <S.User>
        <div>
          <span><strong>Lucas Fritschy</strong></span>
          <span>Teste de Front-end</span>
        </div>
        <div>LF</div>
      </S.User>
    </S.Container>
  )
}