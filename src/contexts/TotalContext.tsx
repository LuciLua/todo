import { createContext, useContext, useEffect, useState } from "react"

export const TotalContext = createContext("total")

const TotalProvider = ({ children }) => {
    
    const [total, setTotal] = useState<any>(0)

    useEffect(() => {
        setTotal(0)
        getTotalItems()
    })

    function getTotalItems(){
        setTotal(JSON.parse(localStorage.getItem('local_todo')).length)
    }


    // estados
    const state: any = {
        total: total
    }

    return (
        <TotalContext.Provider value={{...state}}>
            {children}  {/* _app content */}
        </TotalContext.Provider>
    )
}

export default TotalProvider
