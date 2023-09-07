import PropTypes from 'prop-types';
import {
  StyledLiItem,
  StyledList,
  StyledSection,
  StyledTitle,
} from './Statistics.styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Statistics = ({ data, title }) => {
  return (
    <StyledSection>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledList>
        {data.map(el => (
          <StyledLiItem key={el.id} $bg={getRandomHexColor()}>
            <span>{el.label}</span>
            <span>{el.percentage}</span>
          </StyledLiItem>
        ))}
      </StyledList>
    </StyledSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
};
