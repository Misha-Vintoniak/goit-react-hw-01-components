import PropTypes from 'prop-types';
import s from './friends.module.css';

function FriendList({ friends }) {
  //   const { avatar, name, isOnline, id } = friends;
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span
            className={friend.isOnline ? s.statusOnline : s.statusOffline}
          ></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propType = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    nam: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
export default FriendList;
