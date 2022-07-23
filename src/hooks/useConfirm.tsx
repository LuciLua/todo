import { useContext } from "react"
import { DialogBoxContext } from "../contexts/DialogBoxContext";

// Criacao de hook para facilitar utilizacao do contexto
const useConfirm = () => {

    
    const context = useContext<any>(DialogBoxContext)
    const { confirm, setConfirm } = context

    
    if (!context) {
        throw new Error("useNome must be used withim an nomeProvider");
    }

    return { confirm, setConfirm }
}

export default useConfirm