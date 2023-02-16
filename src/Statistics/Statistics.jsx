import PropTypes from 'prop-types';
import {
  Stats,
  Title,
  StatList,
  StatsItem,
  Label,
  Percentage,
} from '../Statistics/Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Stats key="">
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatsItem
            key={stat.id}
            getRandomHexColor={Math.floor(Math.random() * 16777215)
              .toString(16)
              .padStart(6, 0)}
          >
            <Label>{stat.label} </Label>
            <Percentage> {stat.percentage}%</Percentage>
          </StatsItem>
        ))}
      </StatList>
    </Stats>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
