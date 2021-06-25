import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
  width: 18.5rem;
  padding: 0.5rem 1rem;
  background: var(--white);
  color: var(--text-search);

  input{
    background: transparent;
    border: 0;
    outline: none;

    ::-webkit-input-placeholder {
      font-style: italic;
      color: var(--text-body);
}
  }
`