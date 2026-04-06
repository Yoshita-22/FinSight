import React from 'react'
import { useTransactions } from '../../context/TransactionsContext'
import PaginatedItems from '../common/Pagination';
import EditTransactionModal from './EditTransaction';
import { useRole } from '../../context/RoleContext';
import TransactionsControls from './TransactionsControls';
import { useState } from 'react';
import { FaCheck, FaMoneyBill, FaArrowDown } from "react-icons/fa";
import AddTransactionModal from './AddTransaction';


function TransactionSection({selectedMonth,proceesedTransactions}) {
  const {transactions} = useTransactions();
  const options = [
    { label: "All", value: "all", icon: <FaCheck /> },
    { label: "Income", value: "income", icon: <FaMoneyBill /> },
    { label: "Expense", value: "expense", icon: <FaArrowDown /> },];
  const sortOptions = ["Latest","Oldest","Amount(high to low)","Amount(low to high)"];
  const [searchInput,setSearchInput] = useState("");
  const [filter,setFilter] = useState(options[0].value);
  const [sort,setSort] = useState(sortOptions[0]);
  const [editingTx, setEditingTx] = useState(null);
  const[showTransaction,setShowTransaction] = useState(false);
  const {role} = useRole();
  
    
    
    //search by category
   
     proceesedTransactions = proceesedTransactions.filter((transaction)=>{
       return  transaction.category.toLowerCase().includes(searchInput.toLowerCase())
    });
    //filter transactions based on type
    proceesedTransactions = proceesedTransactions.filter((transaction)=>{
      if(filter=="all") return true;
      return transaction.type == filter;
    });
    //sort by date or amount
    if(sort==sortOptions[0]) proceesedTransactions =  proceesedTransactions.sort((a, b) => new Date(b.date) - new Date(a.date)) // latest;//latest
    else if(sort==sortOptions[1]) proceesedTransactions =  proceesedTransactions.sort((a,b)=>new Date(a.date)-new Date(b.date))//oldest
    else if(sort==sortOptions[2]) proceesedTransactions = proceesedTransactions.sort((a,b)=>b.amount-a.amount);//amount from high to low
    else proceesedTransactions = proceesedTransactions.sort((a,b)=>a.amount-b.amount);//amount from low to high
  
  return (
    <>
    <div className=" flex flex-col md:flex-row mb-4 gap-6 ml-2 px-2 mt-4">
      <div>
        <h2 className="
        text-xl md:text-2xl font-semibold
        text-text-primaryLight dark:text-text-primaryDark
        tracking-tight
      ">
        Transactions
      </h2>
      <p className="
        text-sm mt-1
        text-text-secondaryLight dark:text-text-secondaryDark
      ">
      Track, filter and analyze your financial activity
    </p>
      </div>

      <button 
       title={role !== "admin" ? "Only admin can add transactions" : ""}
      disabled = {role!=="admin"}
      className={`
            px-4 py-2 rounded-xl
            text-sm font-medium
            shadow-sm
            transition ${role=="admin"?"bg-primary text-white hover:opacity-90"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
        onClick = {()=>setShowTransaction(true)}
        >
        + Add Transaction
      </button>
      {
        showTransaction && <AddTransactionModal onClose = {()=>setShowTransaction(false)}/>
      }

  </div>
    <div>
      
      <TransactionsControls searchInput = {searchInput} setSearchInput = {setSearchInput} 
                            filter = {filter} setFilter = {setFilter} 
                            sort = {sort} setSort={setSort}
                            options = {options} sortOptions = {sortOptions}
      />
    </div>
    <div className =
    "hidden md:grid md:grid-cols-5 items-center  p-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl"
    >
     <p className = "text-text-primaryLight dark:text-text-primaryDark font-bold">Category</p>
     <p className = "text-text-primaryLight dark:text-text-primaryDark font-bold">Date</p>
     <p className = "text-text-primaryLight dark:text-text-primaryDark font-bold">Amount</p>
     <p className = "text-text-primaryLight dark:text-text-primaryDark font-bold">Type</p>
     {role=="admin" && <p className = "text-text-primaryLight dark:text-text-primaryDark font-bold">Actions</p>}
    </div>
    
    <div>
        <PaginatedItems itemsPerPage={5} transactions={proceesedTransactions} onEdit={(tx) => setEditingTx(tx)}/>
         {editingTx && (
                    <EditTransactionModal
                        transaction={editingTx}
                        onClose={() => setEditingTx(null)}
                    />
          )}
    </div>
    
    </>
  )
}

export default TransactionSection