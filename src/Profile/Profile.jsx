import PropTypes from 'prop-types';
import {
  ProfileCard,
  Image,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  StatsList,
  StatsItem,
  Quantity,
} from '../Profile/Profile.styled';

export default function Profile({
  username,
  avatar,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileCard>
      <div className="description">
        <Image src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </div>

      <StatsList>
        <StatsItem>
          <span className="label">Followers </span>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Views </span>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes </span>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
