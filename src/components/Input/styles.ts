import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  width: 18.5rem;
  padding: 0.5rem 1rem;
  background: var(--white);
  color: var(--text-search);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
  }

  form {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
  }

  input{
    flex: 1;
    background: transparent;
    border: 0;
    outline: none;

    ::-webkit-input-placeholder {
      font-style: italic;
      color: var(--text-search);
    }
  }

  @media(max-width: 800px) {
    width: 100%;
  }
`