import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 7.125rem;
  height: 100%;
  max-width: 1480px;
  padding-top: 2.5rem;

  img {
    border-radius: 4px;
  }

  svg {
     margin-bottom: 1rem;
  }

  @media(max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 4rem;
  }
`

export const CharProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;

  h1 {
    font-size: 3rem;
    color: var(--text-title);
    margin-bottom: 1rem;
  }

  @media(max-width: 800px) {
    justify-content: center;
    margin-right: 0;
    margin-top: -1rem;

  }
`

export const CharDescription = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 5rem;

  span{
    margin-top: 2rem;
  }

  a {
    margin: 2rem 0;
  }

  @media(max-width: 800px) {
    margin-top: 2.5rem;
    align-items: center;
  }
`