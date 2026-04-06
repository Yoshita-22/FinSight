import { useTransactions } from "../../context/TransactionsContext"

export const  getMonthTransactions = (selectedMonth,transactions)=>{
    return transactions.filter((tx)=>
         new Date(tx.date).toISOString().slice(0, 7)==selectedMonth
    )
}
