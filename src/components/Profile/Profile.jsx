import PropTypes from 'prop-types';
import style from './Profile.module.css'


export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <div className={style.profile}>
            <div className="description">
                <img
                    src={avatar}
                    alt={username}
                    className={avatar}
                />
                <p >{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={style.list}>
                <li>
                    <span className="label">Followers</span>
                    <br />
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <br />
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <br />
                    <span className="quantity">{stats.likes}</span>
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


