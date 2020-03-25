import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow-y: scroll;
  margin-bottom: 80px;

  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 800px;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
