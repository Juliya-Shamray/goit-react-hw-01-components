import PropTypes from 'prop-types';
import {
  StyledRow,
  StyledRows,
  StyledTable,
  StyledTd,
} from './TransactionHistory.styled';
import { theme } from 'styles/theme';

export const TransactionHistory = ({ transactions }) => {
  return (
    <StyledTable>
      <thead>
        <StyledRow color={theme} bg={theme}>
          <StyledTd>Type</StyledTd>
          <StyledTd>Amount</StyledTd>
          <StyledTd>Currency</StyledTd>
        </StyledRow>
      </thead>

      <tbody>
        {transactions.map(({ currency, amount, type, id }, idx) => (
          <StyledRows key={id} idx={idx}>
            <StyledTd>{type}</StyledTd>
            <StyledTd>{amount}</StyledTd>
            <StyledTd>{currency}</StyledTd>
          </StyledRows>
        ))}
      </tbody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
