import PropTypes from 'prop-types';
import {
  StyledIsOnline,
  StyledLiItem,
  StyledList,
  StyledTitle,
} from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <StyledList>
      {friends.map(friend => (
        <StyledLiItem key={friend.id}>
          <StyledIsOnline $status={friend.isOnline}></StyledIsOnline>
          <img src={friend.avatar} alt="User avatar" width="60" />
          <StyledTitle>{friend.name}</StyledTitle>
        </StyledLiItem>
      ))}
    </StyledList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
