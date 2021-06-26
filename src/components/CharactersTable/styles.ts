import styled from 'styled-components'

export const Table = styled.table`
width: 100%;
border-collapse: separate;
border-spacing: 0 0.5rem;
margin-top: 2.5rem;

td {
  text-align: left;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  font-size: 0.875rem;
}

tr {
  text-align: left;
  th{
    color: var(--text-search);
    font-size: 0.75rem;
    font-weight: 500;
  }

  th:first-child {
    padding-left: 1.5rem;
  }
}

tr:not(:first-child)  {
  box-shadow: 0px 0px 5px #00000033;
  border-radius: 4px;
  height: 5.5rem;
}
`

export const CharBox = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

span {
  font-size: 1rem;
}

img {
  margin: 1.5rem; 
}
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-right: 2rem;
`