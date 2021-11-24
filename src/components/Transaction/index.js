import React from "react";

const Transaction = ({transaction}) => (
    <div>
        Label: {transaction.label}
        <p>Value: {transaction.value}</p>
        <br/>
    </div>
)

export default Transaction;
