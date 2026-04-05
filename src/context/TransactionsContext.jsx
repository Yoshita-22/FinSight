import { useContext } from "react";
import { createContext,useState } from "react";
import { initialTransactions } from "../components/data/mockData";
const TransactionsContext = createContext();
export const TransactionsProvider = ({children})=>{
    const [transactions,setTransactions] = useState(initialTransactions);
    return (
        <TransactionsContext.Provider value = {{transactions,setTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )

}
export const useTransactions =()=> useContext(TransactionsContext);