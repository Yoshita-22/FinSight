import React, { useState } from 'react'
import TransactionSection from './components/Transactions/TransactionSection';
import Navbar from './components/common/Navbar';
import SummarySection from './components/Summary/SummarySection';

function App() {
  return (
    <div className='bg-bg-light dark:bg-bg-dark'>
      <Navbar/>
      <SummarySection/>
      <TransactionSection/>
    
    </div>
  )
}

export default App