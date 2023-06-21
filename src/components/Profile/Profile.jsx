import PropTypes from 'prop-types';
import style from './Profile.module.css'


export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <div className={style.profile}>
            <div className={style.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={style.avatar}
                />
                <p className={style.avatarItem}>{username}</p>
                <p className={style.avatarItem}>@{tag}</p>
                <p className={style.avatarItem}>{location}</p>
            </div>

            <ul className={style.list}>
                <li className={style.listItem}>
                    <span className={style.label}>Followers</span>
                    <br />
                    <span className={style.quantity}>{stats.followers}</span>
                </li>
                <li className={style.listItem}>
                    <span className={style.label}>Views</span>
                    <br />
                    <span className={style.quantity}>{stats.views}</span>
                </li>
                <li className={style.listItem}>
                    <span className={style.label}>Likes</span>
                    <br />
                    <span className={style.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
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
    })

}


