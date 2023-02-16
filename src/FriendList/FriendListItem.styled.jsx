import styled from '@emotion/styled';
// Status, FriendImg, Friendname;

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
