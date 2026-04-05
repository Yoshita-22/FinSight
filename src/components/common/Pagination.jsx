import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { useTransactions } from '../../context/TransactionsContext';
import TransactionEntries from '../Transactions/TransactionEntries';
 
function PaginatedItems({ itemsPerPage,transactions }) {
    const Paginate = ReactPaginate.default || ReactPaginate;

  const [itemOffset, setItemOffset] = useState(0);
  useEffect(()=>{
    setItemOffset(0);
  },[transactions])

  const endOffset = itemOffset + itemsPerPage;
  const currentTransactions = transactions.slice(itemOffset, endOffset);
 
  const pageCount = Math.ceil(transactions.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % transactions.length;
    setItemOffset(newOffset);
  };
  console.log("currentTransactions",currentTransactions);

  return (
    <>
      <TransactionEntries currentTransactions = {currentTransactions}/>
      <Paginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center gap-2 mt-6"
        pageClassName="
            px-3 py-1 rounded-md border
             hover:bg-gray-100  bg-surface-light dark:bg-surface-dark text-text-primaryLight dark:text-text-primaryDark dark:hover:bg-gray-500
            transition cursor-pointer
        "
        previousClassName="
        px-3 py-1 rounded-md border
        hover:bg-gray-100  bg-surface-light dark:bg-surface-dark text-text-primaryLight dark:text-text-primaryDark dark:hover:bg-gray-500
        transition cursor-pointer
        "
        nextClassName="
        px-3 py-1 rounded-md border
         hover:bg-gray-100  bg-surface-light dark:bg-surface-dark text-text-primaryLight dark:text-text-primaryDark dark:hover:bg-gray-500
        transition cursor-pointer
"

      />
    </>
  );
}
export default PaginatedItems;