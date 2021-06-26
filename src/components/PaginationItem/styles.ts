import styled from 'styled-components'

type ContainerProps = {
  isActive: boolean
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
  background: ${props => props.isActive ? 'var(--dark-blue)' : 'var(--snow)'};
  color: ${props => props.isActive ? 'var(--white)' : 'var(--dark-smoke)'};
`