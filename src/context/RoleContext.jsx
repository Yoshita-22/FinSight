
import { createContext, useState,useContext,useEffect } from "react";

const RoleContext = createContext();
export const RoleProvider = ({children})=>{
    const [role,setRole] = useState(
        ()=>{
            let saved = localStorage.getItem("role");
            return saved!==null ? saved : "viewer" 
        }
    );
    useEffect(()=>{
        localStorage.setItem("role",role)
    },[role])
    return (
        <>
         <RoleContext.Provider value = {{role,setRole}}>
            {children}
         </RoleContext.Provider>

        </>
    )
}
export const useRole = ()=>useContext(RoleContext);