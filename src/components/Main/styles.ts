import styled from 'styled-components'

export const Container = styled.footer`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  height: 100%;
  max-width: 1480px;
  padding-top: 2.5rem;
  margin: 0 auto;
  background: var(--background);

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
`