import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 360px;
  background-color: white;

  text-align: center;
  border-radius: 7px;
  padding-top: 30px;
  border: 2px solid grey;
  box-shadow: grey 2px 2px 2px 2px;
`;

export const Image = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const ProfileName = styled.p`
  font-family: sans-serif;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 15px;
`;
export const ProfileTag = styled.p`
  margin: 0;
  padding-bottom: 15px;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: grey;
`;
export const ProfileLocation = styled.p`
  margin: 0;
  padding-bottom: 15px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: grey;
`;

export const StatsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: grey;
  background-color: #ededed;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  justify-content: center;
`;

export const StatsItem = styled.li`
  padding: 20px;
  display: block;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-top: 2px solid grey;
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: black;
  margin-top: 10px;
`;
