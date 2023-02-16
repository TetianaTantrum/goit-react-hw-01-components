import PropTypes from 'prop-types';
import { Friends, Friend } from '../FriendList/FriendList.styled';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => (
        <Friend key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
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
