import { useEffect, useState } from "react"
import useConfirm from "../../hooks/useConfirm"
import useTotal from "../../hooks/useTotal"
import styles from "./DialogBox.module.scss"

function DialogBox({ setClear }) {

    const { confirm, setConfirm } = useConfirm()

    // modal 
    const [option, setOption] = useState(true)

    const { total } = useTotal()


    function clearOptions(confirmClear: boolean, optionForCloseBox: boolean) {

        // setOption(false)

        if (confirmClear) {

            localStorage.removeItem('local_todo')
            document.location.reload()

            setClear(false)

            // close modal
            setOption(false)

            console.log('ok')


        } else {
            // close modal
            setOption(false)

            setClear(false)




            console.log('decline')
        }
    }

    if (option == false) return
    else {
        return (
            <div className={styles.fullSizePage}>
                <div className={styles.box}>
                    <h1>Apagar tudo? ({total})</h1>
                    <p>Voce tem certeza que deseja apagar todos os items da lista?</p>
                    <div className={styles.btnCollection}>
                        <button
                            onClick={() => { clearOptions(true, false) }}
                            title="apagar">
                            Apagar
                        </button>
                        <button onClick={() => clearOptions(false, false)} title="cancelar">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DialogBox