import styled from '@emotion/styled';

export const Stats = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 360px;
  text-align: center;
  border-radius: 7px;
  padding-top: 30px;
`;
export const Title = styled.h2`
  font-size: 22px;
  font-family: sans-serif;
  text-transform: uppercase;
  background-color: white;
  padding: 20px;
  margin: 0;
`;

export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  color: white;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  justify-content: center;
`;
export const StatsItem = styled.li`
  background-color: #${({ getRandomHexColor }) => getRandomHexColor};
  padding: 10px;
`;

export const Label = styled.span`
  font-size: 12px;
`;
export const Percentage = styled.span`
  line-height: 20px;
`;
