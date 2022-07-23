import { createContext, useContext, useEffect, useState } from "react"

export const TotalContext = createContext("total")

const TotalProvider = ({ children }) => {

    const [total, setTotal] = useState<any>(0)

    useEffect(() => {
        getTotalItems()
    })

    function getTotalItems() {
        const local_todo = localStorage.getItem('local_todo')
        const parse_todo = JSON.parse(local_todo)
        if (local_todo) {
            const total = parse_todo.length
            setTotal(total)
        } else {
            setTotal(0)
        }
    }


    // estados
    const state: any = {
        total: total
    }

    return (
        <TotalContext.Provider value={{ ...state }}>
            {children}  {/* _app content */}
        </TotalContext.Provider>
    )
}

export default TotalProvider
