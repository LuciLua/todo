import { createContext, useEffect, useState } from "react"
import useConfirm from "../../hooks/useConfirm"
import useTotal from "../../hooks/useTotal"
import styles from "./DialogBox.module.scss"

function DialogBox({ op }) {

    const [option, setOption] = useState(op)
    const { total } = useTotal()

    const { setConfirm } = useConfirm()

    useEffect(() => {
        setOption(op)
        setConfirm(false)
    }, [op])

    function clearOptions(confirmClear:boolean, optionForCloseBox:boolean) {
        setConfirm(confirmClear)
        setOption(optionForCloseBox)
    }

    if (option == false)  return 
    else {
        return (
            <div className={styles.fullSizePage}>
                <div className={styles.box}>
                    <h1>Apagar tudo ({total})</h1>
                    <p>Voce tem certeza que deseja apagar todos os items da lista?</p>
                    <div className={styles.btnCollection}>
                        <button onClick={() => clearOptions(true, false)}>
                            Apagar
                        </button>
                        <button onClick={() => clearOptions(false, false)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DialogBox