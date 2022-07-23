import { createContext, useEffect, useState } from "react"
import useConfirm from "../../hooks/useConfirm"
import useTotal from "../../hooks/useTotal"
import styles from "./DialogBox.module.scss"

function DialogBox({ op }) {

    const [option, setOption] = useState(op)
    const { total } = useTotal()


    useEffect(() => {
        setOption(op)
    }, [op])

    const clearConfirm = () => {
        console.log('clear')
        setOption(false)
    }
    const clearCancel = () => {
        console.log('cancel clear')
        setOption(false)
    }

    console.log("apenas")

    if (option == false) {
        console.log("falseComponent")
        return
    } else {
        console.log("trueComponent")
        return (
            <div className={styles.fullSizePage}>
                <div className={styles.box}>
                    <h1>Apagar tudo ({total})</h1>
                    <p>Voce tem certeza que deseja apagar todos os items da lista?</p>
                    <div className={styles.btnCollection}>
                        <button onClick={clearConfirm}>
                            Apagar
                        </button>
                        <button onClick={clearCancel}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DialogBox