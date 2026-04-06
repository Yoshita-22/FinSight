import React from 'react'
import SummaryCards from './SummaryCards'

import { useTransactions } from '../../context/TransactionsContext';
import { formatMonth } from '../utils/formatMonth';

function SummarySection({selectedMonth,proceesedTransactions}) {
    const {transactions} = useTransactions();
    const formatedMonth = formatMonth(selectedMonth)
    let income = proceesedTransactions.filter((tx)=>tx.type=="income").reduce((acc,curr)=>acc + Number(curr.amount),0);
    let expenses =proceesedTransactions.filter((tx)=>tx.type=="expense").reduce((acc,curr)=>acc + Number(curr.amount),0);
  return (
    <>
    <div className="px-2 mt-6">
        <div className = "mb-4">
            <h1 className='font-semibold text-text-primaryLight dark:text-text-primaryDark tracking-tight text-xl md:text-2xl'>Financial Overview ({formatedMonth})</h1>
            <p className = "text-sm  text-text-secondaryLight dark:text-text-secondaryDark mt-1">Get insights from income,expenses and savings </p>
        </div>
        <div>
            <SummaryCards income = {income} expenses = {expenses}/>
        </div>
    </div>
     

    </>
  )
}

export default SummarySection