import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--background-header);
`

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 0.875rem;
    margin: 1rem;
  }

  > div {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: var(--background);
  }
`