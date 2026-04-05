import React from 'react'
import { useRole } from '../../context/RoleContext';

function TransactionRow(props) {
  const {transactionDetails} = props;
  const {date,amount,category,type} = transactionDetails;
  const formattedDate = 
  new Date(date).toLocaleDateString('en-IN', {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
});
  const {role} = useRole();

  
  return (
    <>
      <div className="
  grid 
  grid-col-1
  md:grid-cols-5 flex items-center
  gap-2 md:gap-0
  p-4
  bg-card-light dark:bg-card-dark
  border border-border-light dark:border-border-dark
  rounded-xl
  hover:shadow-md transition
">

  {/* CATEGORY */}
  <div>
    <p className="md:hidden text-text-primaryLight dark:text-text-primaryDark font-bold">Category</p>
    <p className="text-sm font-medium text-text-primaryLight dark:text-text-primaryDark">
    {category}
    </p>
  </div>

  {/* DATE */}
  <div>
    <p className="md:hidden text-text-primaryLight dark:text-text-primaryDark font-bold">Date</p>
    <p className="text-xs text-text-secondaryLight dark:text-text-secondaryDark">
    {formattedDate}
    </p>
  </div>

  {/* AMOUNT */}
  <p className="md:hidden text-text-primaryLight dark:text-text-primaryDark font-bold">Amount</p>
  <p className={`font-semibold ${type === "expense" ? "text-expense" : "text-income"}`}>
    {type === "expense" ? "-" : "+"}₹{amount}
  </p>

  {/* TYPE BADGE */}
  <p className="md:hidden text-text-primaryLight dark:text-text-primaryDark font-bold">Type</p>
  <span className={`
    justify-self-start
    px-2 py-1 text-xs rounded-full
    ${type === "expense"
      ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
      : "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"}
  `}>
    {type}
  </span>

  {/* ACTIONS */}
  {
    role=="admin" && (
      <div className="flex gap-4">
        <button className="text-gray-400 hover:text-blue-500">Edit</button>
        <button className="text-gray-400 hover:text-red-500">Delete</button>
      </div>
    )
  }

</div>
    </>
  )
}

export default TransactionRow