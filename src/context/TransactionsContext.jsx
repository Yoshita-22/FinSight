import { useContext,useEffect } from "react";
import { createContext,useState } from "react";
import { initialTransactions } from "../components/data/mockData";
const TransactionsContext = createContext();
export const TransactionsProvider = ({children})=>{
    const [transactions,setTransactions] = useState(
        ()=>{
            const saved = localStorage.getItem("transactions");
            return  saved ? JSON.parse(saved) : initialTransactions
            
        }
    );
    useEffect(()=>{
        localStorage.setItem("transactions",JSON.stringify(transactions))
    },[transactions])
    const addTransactions = (newTransaction)=>{
        setTransactions(prev =>[...prev,newTransaction])
    }
    const editTransactions = (transaction)=>{
        let remainigTransactions = transactions.filter((tx)=>tx.id!=transaction.id);
        setTransactions([...remainigTransactions,transaction]);
    }
    const deleteTransactions = (id)=>{
        setTransactions(prev=>prev.filter((transaction)=>transaction.id!==id));
    }
    return (
        <TransactionsContext.Provider value = {{transactions,setTransactions,addTransactions,editTransactions,deleteTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )

}
export const useTransactions =()=> useContext(TransactionsContext);