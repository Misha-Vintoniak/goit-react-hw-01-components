import s from './Friends.module.css';
import FriendListItem from './FriendListItem';

export default function Friends({ friends }) {
  return <ul className={s.friendList}>{friends.map(FriendListItem)}</ul>;
}
