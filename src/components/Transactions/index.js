import Transaction from "../Transaction";
import React from "react";
import PropTypes from 'prop-types';

const Transactions = ({transactions = []}) =>
    transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}/>);

Transactions.propTypes = {
    transactions: PropTypes.array
}

Transactions.defaultProps = {
    transactions: []
}

export default Transactions;
