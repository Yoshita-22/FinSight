import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";

function TransactionsControls(props) {
   
    const {searchInput,setSearchInput,filter,setFilter,sort,setSort,options,sortOptions} = props;

  return (
    <>
    <div className="
      flex flex-col md:flex-row
      md:items-center 
      gap-4 mb-6 mt-6 ml-2"
    >
    <div className="relative w-full md:w-1/3">
        <input
        type="text"
        placeholder="Search by category..."
        value = {searchInput}
        onChange={(e) => {

            setSearchInput(e.target.value);
            
        }}
        className="
          w-full
          pl-11 pr-4 py-2
          rounded-xl
          outline-none
          bg-white/60 dark:bg-white/5
          backdrop-blur-md
          border border-border-light dark:border-border-dark

          text-text-primaryLight dark:text-text-primaryDark
          placeholder:text-gray-400

          focus:ring-2 focus:ring-primary
          transition
        "
      />
      <FiSearch
        className="
          absolute left-3 top-1/2 -translate-y-1/2
          text-gray-400 dark:text-gray-500
          pointer-events-none
          text-lg
        "
      />

      </div>
    <div className="flex flex-wrap gap-3 justify-center">

      {options.map((option) => {
        const isActive = filter === option.value;

        return (
          <button
            key={option.value}
            onClick={() => setFilter(option.value)}
            className={`
              flex items-center gap-2
              px-4 py-1.5 rounded-full text-sm

              transition-all duration-200

              ${
                isActive
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-transparent border border-border-light dark:border-border-dark text-text-primaryLight dark:text-text-primaryDark hover:bg-gray-100 dark:hover:bg-gray-800"
              }
            `}
          >
            <span className="text-base">{option.icon}</span>
            {option.label}
            
          </button>
        );
      })}

    </div>
    <div>
     <select className = "px-2 py-2 pr-1 rounded text-sm bg-transparent border border-border-light dark:border-border-dark text-text-primaryLight dark:text-text-primaryDark hover:bg-gray-100 dark:hover:bg-gray-800"
             onChange = {(e)=>setSort(e.target.value)}
     >
           {
            sortOptions.map((option)=>{
            return (
                <option key = {option} value = {option} >{option}</option>
            )
        })

        }
     </select>
    </div>
   </div>
    
    
    </>
  )
}

export default TransactionsControls