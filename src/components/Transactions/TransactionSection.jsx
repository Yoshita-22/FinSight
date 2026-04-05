import React from 'react'
import { useTransactions } from '../../context/TransactionsContext'
import PaginatedItems from '../common/Pagination';
import { useRole } from '../../context/RoleContext';
import TransactionsControls from './TransactionsControls';
import { useState } from 'react';
import { FaCheck, FaMoneyBill, FaArrowDown } from "react-icons/fa";
function TransactionSection() {
  const {transactions} = useTransactions();
  const options = [
    { label: "All", value: "all", icon: <FaCheck /> },
    { label: "Income", value: "income", icon: <FaMoneyBill /> },
    { label: "Expense", value: "expense", icon: <FaArrowDown /> },];
  const sortOptions = ["Latest","Oldest","Amount(high to low)","Amount(low to high)"];
  const [searchInput,setSearchInput] = useState("");
  const [filter,setFilter] = useState(options[0].value);
  const [sort,setSort] = useState(sortOptions[0]);
  const {role} = useRole();
    //search by category
    let searchedTransactions = transactions.filter((transaction)=>{
       return  transaction.category.toLowerCase().includes(searchInput.toLowerCase())
    });
    //filter transactions based on type
    let filteredTransactions = searchedTransactions.filter((transaction)=>{
      if(filter=="all") return true;
      return transaction.type == filter;
    });
    //sort by date or amount
    let sortedTransactions = [...filteredTransactions];
    if(sort==sortOptions[0]) sortedTransactions =  sortedTransactions.sort((a, b) => new Date(b.date) - new Date(a.date)) // latest;//latest
    else if(sort==sortOptions[1]) sortedTransactions =  sortedTransactions.sort((a,b)=>new Date(a.date)-new Date(b.date))//oldest
    else if(sort==sortOptions[2]) sortedTransactions = sortedTransactions.sort((a,b)=>b.amount-a.amount);//amount from high to low
    else sortedTransactions = sortedTransactions.sort((a,b)=>a.amount-b.amount);//amount from low to high


  
  return (
    <>
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
        <PaginatedItems itemsPerPage={5} transactions={sortedTransactions}/>
    </div>
    
    </>
  )
}

export default TransactionSection