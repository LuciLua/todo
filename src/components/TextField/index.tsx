import { useState } from "react"
import styles from "./index.module.scss"
import { AiOutlineSend } from "react-icons/ai"

function TextField({ addNewItem }) {

    const [textVal, setTextVal] = useState("")

    const handleOnChange = (e) => {
        setTextVal(prevText => e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addNewItem({ todo: textVal, status: "pending" })
        setTextVal("")
        console.log("Added new item!")
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
                <button>
                    <AiOutlineSend onClick={() => handleOnChange(textVal)} />
                </button>
            </span>
        </form>
    )
}


export default TextField