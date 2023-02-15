import PropTypes from 'prop-types';
import {
  Friends,
  Friend,
  Status,
  FriendImg,
  Friendname,
} from '../FriendList/FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(({ name, isOnline, avatar }) => (
        <Friend key={name}>
          <Status isOnline={isOnline}></Status>
          <FriendImg src={avatar} alt="User avatar" width="48" />
          <Friendname>{name}</Friendname>
        </Friend>
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
