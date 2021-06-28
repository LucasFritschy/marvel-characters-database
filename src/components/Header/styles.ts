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
  font-family: 'PT Sans Caption', sans-serif;

  p {
    font-size: 0.875rem;
    margin: 1rem;
  }

  div:first-of-type {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      span + span {
        margin: 0 10px;
      }
    }

  div + div {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: var(--background);
  }

  @media(max-width: 800px) {
    div:first-of-type {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    div + div {
      margin-left: 2.5px;
    }
  }
`