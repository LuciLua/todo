import { useState } from "react"
import styles from "./TextField.module.scss"
import { AiOutlineSend } from "react-icons/ai"

function TextField({ addNewItem }) {

    const [textVal, setTextVal] = useState("")

    const handleOnChange = (e) => {
        setTextVal(() => e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addNewItem({ todo: textVal, status: "pending" })
        setTextVal("") // seta valor para nenhum
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input
                type="text"
                onInput={(e) => handleOnChange(e)}
                value={textVal}
                placeholder="New Item"
            />
            <span>
                <button type="submit">
                    <AiOutlineSend />
                </button>
            </span>
        </form>
    )
}


export default TextField