import React from 'react'
import TransactionRow from './TransactionRow';
function TransactionEntries(props) {
    const {currentTransactions} = props;
    return (
            <>
                {currentTransactions && currentTransactions.map((transaction) => {
                return <TransactionRow key={transaction.id} transactionDetails={transaction}/>
                })}
            </>
    )
}

export default TransactionEntries