import React from 'react'
import TransactionRow from './TransactionRow';
import { useState } from 'react';
function TransactionEntries(props) {
    const {currentTransactions,onEdit} = props;
    
    return (
            <>
                {currentTransactions && currentTransactions.map((transaction) => {
                return <TransactionRow key={transaction.id} transactionDetails={transaction} onEdit = {onEdit}/>
                })}
                
               
                
            </>
    )
}

export default TransactionEntries