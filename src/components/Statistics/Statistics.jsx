import PropTypes from 'prop-types';
import style from './Statistic.module.css'; 

export default function Statistics({ data }) {
    return (<section className={style.statistics}>
        <h2 className={style.title}>Upload stats</h2>
        <ul className={style.statList}>
            {data.map(item => {
                return <li key={item.id} className={style.statlistItem}>
                    <span className={style.label}>{item.label}</span>
                    <br/>
                    <span className={style.percentage}>{item.percentage} %</span>
                </li>
            })}
        </ul>
    </section>
    );
}

Statistics.propTypes = {
data: PropTypes.array.isRequired,
}