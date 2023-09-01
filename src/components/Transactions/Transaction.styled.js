import { styled } from 'styled-components';

export const TransactionTable = styled.table`
  background-color: #231e39;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding-bottom: 30px;
  width: 100%;
  text-align: center;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRowHead = styled.tr``;

export const TableRowBody = styled.tr`
  background-color: ${props => (props['data-even'] ? '#2c2350' : '#4d4185')};
`;

export const Th = styled.th`
  padding: 20px 0;
  border-bottom: 1px solid #a69ad2;
`;

export const Td = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
`;
