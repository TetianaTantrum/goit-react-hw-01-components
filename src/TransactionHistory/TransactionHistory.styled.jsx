import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  margin-bottom: 100px;
`;
export const TransactionThead = styled.thead`
  text-align: center;
  font-size: 16px;
  font-family: sans-serif;
  text-transform: uppercase;
  background-color: #45aba7;
  color: white;
`;
export const TransactionTh = styled.th`
  padding: 20px;
`;
export const TransactionTr = styled.tr`
  color: grey;
  background-color: white;
  border: 1px solid white;
  :nth-of-type(even) {
    background-color: #f7f7f7;
  }
`;
export const TransactionTd = styled.td`
  padding: 14px 14px 14px 100px;
  font-family: sans-serif;
  text-transform: capitalize;
  font-size: 16px;
`;
export const TransactionTdRight = styled.td`
  padding-right: 110px;
  text-align: right;
  font-family: sans-serif;
  font-size: 16px;
`;
