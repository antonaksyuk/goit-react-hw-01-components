import PropTypes from 'prop-types';
import style from './FriendLisyItem.module.css';
import classNames from 'classnames';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li className={style.item}>
      <span className={classNames(style.point, {[style.isOnline]: isOnline}, {[style.isOffline]: !isOnline} )}>{ isOnline}</span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

