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

    td:first-child {
      border-radius: 4px 0 0 4px;
    }

    td:last-child {
      border-radius: 0 4px 4px 0;
    }
  }

  tbody {
    tr {
      box-shadow: 0px 0px 5px #00000033;
      height: 5.5rem;
    }

  }

  @media(max-width: 800px) {
    td {
      width: 20%;
    }

    td + td {
      width: 80%;
    }
  }
`

export const CharBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    margin: 1.5rem;
    height: 3rem;
    width: 3rem;
    border-radius: 4px;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-right: 2rem;
`