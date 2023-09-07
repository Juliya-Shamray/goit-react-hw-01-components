import PropTypes from 'prop-types';
import {
  StyledContainer,
  StyledContent,
  StyledList,
  StyledListItem,
  StyledParagLocation,
  StyledParagName,
  StyledParagTag,
  StyledSpanLabel,
  StyledSpanQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <StyledContainer>
      <StyledContent>
        <img src={avatar} alt="User avatar" />
        <StyledParagName>{username}</StyledParagName>
        <StyledParagTag>{tag}</StyledParagTag>
        <StyledParagLocation>{location}</StyledParagLocation>
      </StyledContent>

      <StyledList>
        <StyledListItem>
          <StyledSpanLabel>Followers</StyledSpanLabel>
          <StyledSpanQuantity>{followers}</StyledSpanQuantity>
        </StyledListItem>
        <StyledListItem>
          <StyledSpanLabel>Views</StyledSpanLabel>
          <StyledSpanQuantity>{views}</StyledSpanQuantity>
        </StyledListItem>
        <StyledListItem>
          <StyledSpanLabel>Likes</StyledSpanLabel>
          <StyledSpanQuantity>{likes}</StyledSpanQuantity>
        </StyledListItem>
      </StyledList>
    </StyledContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
