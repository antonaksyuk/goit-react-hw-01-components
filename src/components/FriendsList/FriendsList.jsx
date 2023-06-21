import PropTypes from 'prop-types';
// import styles from './FriendsList.module.css';
import FriendsListItem from '../FriendListItem';


export default function FriendsList({ friends }) {
  return (<ul>
    {friends.map(friend => (
      <FriendsListItem
      key = { friend.id }
      avatar = { friend.avatar }
      isOnline = { friend.isOnline }
        name={friend.name}
      />
    ))}
  </ul>
  );
}

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ),
};