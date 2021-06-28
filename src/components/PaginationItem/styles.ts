import styled from 'styled-components'

type ContainerProps = {
  isCurrent: boolean
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;

  width: 2.5rem;
  height: 2rem;
  border-radius: 4px;
  border: 1px solid var(--dark-snow);
  cursor: ${props => props.isCurrent && 'auto'};
  background: ${props => props.isCurrent ? 'var(--dark-blue)' : 'var(--snow)'};
  color: ${props => props.isCurrent ? 'var(--white)' : 'var(--dark-smoke)'};

  &:hover {
    background: ${props => props.isCurrent ? 'var(--dark-blue)' : 'var(--light-blue)'};
    color: ${props => props.isCurrent ? 'var(--white)' : 'var(--white)'};  }
`