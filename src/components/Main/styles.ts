import styled from 'styled-components'

export const Container = styled.main`
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 7.125rem;
    height: 100%;
    max-width: 1480px;
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