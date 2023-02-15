import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionThead,
  TransactionTh,
  TransactionTr,
  TransactionTd,
  TransactionTdRight,
} from '../TransactionHistory/TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TransactionThead>
        <tr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </tr>
      </TransactionThead>
      <tbody>
        {items.map(item => (
          <TransactionTr key={item.id}>
            <TransactionTd>{item.type}</TransactionTd>
            <TransactionTdRight>{item.amount}</TransactionTdRight>
            <TransactionTdRight>{item.currency}</TransactionTdRight>
          </TransactionTr>
        ))}
      </tbody>
    </TransactionTable>
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
  ).isRequired,
};
