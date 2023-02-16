import PropTypes from 'prop-types';
import {
  Status,
  FriendImg,
  Friendname,
} from '../FriendList/FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <Status isOnline={isOnline} />
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <Friendname>{name}</Friendname>
    </>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}.isRequired;
