import React, { useState } from 'react'
import TransactionSection from './components/Transactions/TransactionSection';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <div className='bg-bg-light dark:bg-bg-dark'>
      <Navbar/>
      <TransactionSection/>
    
    </div>
  )
}

export default App