import React from 'react'
import { useState } from 'react'
import SummarySection from './components/Summary/SummarySection'
import TransactionSection from './components/Transactions/TransactionSection'
import Navbar from './components/common/Navbar'
import { getMonthTransactions } from './components/utils/transactions'
import { useTransactions } from './context/TransactionsContext'
function Dashboard() {
    const [selectedMonth, setSelectedMonth] = useState(
        new Date().toISOString().slice(0, 7)
    );
    const {transactions} = useTransactions();
    const proceesedTransactions  = getMonthTransactions(selectedMonth,transactions)
  return (

    <>
    <Navbar/>
<div className="
  flex items-center justify-between
  px-2 mt-4
">
  <h1 className="
    text-xl md:text-2xl font-semibold
    text-text-primaryLight dark:text-text-primaryDark
  ">
    Financial Dashboard
  </h1>
  <input
    type="month"
    value={selectedMonth}
    onChange={(e) => setSelectedMonth(e.target.value)}
    className="
      px-3 py-2 rounded-xl text-sm
      bg-white/60 dark:bg-white/5 backdrop-blur-md
      border border-border-light dark:border-border-dark
      text-text-primaryLight dark:text-text-primaryDark
      focus:ring-2 focus:ring-primary
    "
  />

</div>
    <SummarySection selectedMonth = {selectedMonth} proceesedTransactions={proceesedTransactions }/>
    <TransactionSection selectedMonth = {selectedMonth} proceesedTransactions={proceesedTransactions }/>
    </>
  )
}


export default Dashboard