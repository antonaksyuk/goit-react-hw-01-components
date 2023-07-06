import PropTypes from 'prop-types';
import style from './Statistic.module.css'; 

export default function Statistics({ data, title }) {
    return (<section className={style.statistics}>
        {title && <h2 className={style.title}>{title}</h2>}
        <ul className={style.statList}>
            {data.map(item => {
                return <li key={item.id} className={style.statlistItem} style={{ backgroundColor: getRandomHexColor() }}>
                    <span className={style.label}>{item.label}</span>
                    <br />
                    <span className={style.percentage}>{item.percentage} %</span>
                </li>
            })}
        </ul>
    </section>
    );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
data: PropTypes.array.isRequired,
}