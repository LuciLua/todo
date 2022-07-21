import styles from "./List.module.scss"
import { useState, useEffect } from "react"
import { AiOutlineLine, AiOutlineCheck, AiOutlineClose } from "react-icons/ai"


const ListItem = ({ todos, index, handleRemoveItem, handleUpdateItem }) => {
    return (
        <li className={styles.listItem} value={todos.status}>
            <button className={styles.check}
                onClick={() => handleUpdateItem(index)}>
                {
                    todos.status == "pending"
                        ? <AiOutlineLine /> : <AiOutlineCheck />
                }
            </button>
            <span>{todos.todo}</span>
            <button className={styles.remove} onClick={() => handleRemoveItem(index)}>
                <AiOutlineClose color="#aa0000" />
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