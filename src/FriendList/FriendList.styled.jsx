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
export const Status = styled.span`
  background-color: ${({ isOnline }) => (isOnline ? '#29bc27' : '#f72323')};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
export const FriendImg = styled.img`
  border-radius: 10%;
`;
export const Friendname = styled.p`
  font-family: sans-serif;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;
