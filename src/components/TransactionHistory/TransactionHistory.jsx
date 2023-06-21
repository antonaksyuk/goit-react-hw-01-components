import PropTypes from 'prop-types';
import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem.jsx';
import style from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
    <table className={style.table}>
        <thead >
            <tr >
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => (
                <TransactionHistoryItem key={item.id} type={item.type} amount={item.amount} currency={item.currency}
                />
            ))}
        </tbody>
        </table>
       );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};
