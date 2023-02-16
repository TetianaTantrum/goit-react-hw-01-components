import styled from '@emotion/styled';

export const Friends = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding: 0;
  width: 360px;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 20px;
`;
export const Friend = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 5fr;
  padding: 10px 20px;
  background-color: #ffffff;
  align-items: center;
  box-shadow: grey 2px 2px 2px 1px;
`;
