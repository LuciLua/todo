import { createContext, useContext, useState } from "react"

export const DialogBoxContext = createContext("cancel")

const DialogProvider = ({ children }) => {
    
    // const [confirm, setConfirm] = useState<any>("cancel")

    // estados
    const state: any = {
        confirm: "confirm",
        cancel: "cancel"
    }

    return (
        <DialogBoxContext.Provider value={{...state}}>
            {children}  {/* _app content */}
        </DialogBoxContext.Provider>
    )
}

export default DialogProvider
