import { useContext } from "react"
import { TotalContext } from "../contexts/TotalContext";

// Criacao de hook para facilitar utilizacao do contexto
const useTotal = () => {

    const context = useContext<any>(TotalContext)
    const { total } = context

    if (!context) {
    throw new Error("useNome must be used withim an nomeProvider");
    }

    return { total }
}

export default useTotal