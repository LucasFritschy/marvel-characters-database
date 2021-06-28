import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    max-width: 1480px;
    width: 100%;
    padding-top: 2.5rem;
    background: var(--background);
  }

  h1 {
    font-size: 2rem;
    color: var(--text-title);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1rem;
    color: var(--text-title);
    margin-bottom: 0.5rem;
  }

  footer {
    align-self: flex-end;
  }

  @media(max-width: 800px) {

  margin: 0 2rem;

    > div {
      align-items: center;
      margin: 0 24pt;
    }
    

    h1 {
      font-size: 24pt;
    }

    h2 {
      font-size: 14pt;
    }
  }
`