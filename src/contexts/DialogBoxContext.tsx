import { createContext, useContext, useEffect, useState } from "react"

export const DialogBoxContext = createContext("cancel")

const DialogProvider = ({ children }) => {

    const [confirm, setConfirm] = useState<any>(false) 

    // estados
    const state: any = {
        confirm: confirm,
        setConfirm: setConfirm
    }
    
    return (
        <DialogBoxContext.Provider value={{ ...state }}>
            {children}  {/* _app content */}
        </DialogBoxContext.Provider>
    )
}

export default DialogProvider
