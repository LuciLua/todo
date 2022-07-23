import styles from "./List.module.scss"
import { useState, useEffect } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri"


const ListItem = ({ todos, index, handleRemoveItem, handleUpdateItem }) => {
    return (
        <li className={styles.listItem} value={todos.status}>
            <button className={styles.check}
                onClick={() => handleUpdateItem(index)}>
                {
                    todos.status == "pending"
                        ? <RiCheckboxBlankCircleLine size={19} color="#1d1d1d82" /> : <RiCheckboxCircleFill size={19} color="#09571b" />
                }
            </button>
            <span>{todos.todo}</span>
            <button className={styles.remove} onClick={() => handleRemoveItem(index)}>
                <AiOutlineDelete color="#1d1d1d82" />
            </button>

        </li>
    )
}

function List({ data, handleRemoveItem, handleUpdateItem }) {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        setTodos(data)
    }, [data])

    return (
        <ul className={styles.list}>
            {todos.map((item, index) => (
                <ListItem
                    key={index}
                    index={index}
                    handleUpdateItem={handleUpdateItem}
                    handleRemoveItem={handleRemoveItem}
                    todos={item}
                />
            ))}
        </ul>
    )
}

export default List