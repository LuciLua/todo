import List from "../components/List/List"
import React, { useContext, useState } from "react"
import { useEffect } from "react"

import styles from "../style/home.module.scss"
import TextField from "../components/TextField"
import DialogBox from "../components/DialogBox/DialogBox"

import useConfirm from "../hooks/useConfirm"
import useTotal from "../hooks/useTotal"

interface propsHandle {
    index: any
}

function Home() {

    const { confirm } = useConfirm()
    const { total } = useTotal()

    const listTodo = []

    const [todos, setTodos] = useState([])
    const [clear, setClear] = useState(false)

    useEffect(() => {
        formarObj()
        setTodos(listTodo)
        setClear(clear)
    }, [clear])

    function formarObj() {
        let local_todo = JSON.parse(localStorage.getItem(`local_todo`))
        if (local_todo) {
            local_todo.map((todo_item) => {
                listTodo.push(todo_item)
            })
        }
    }

    function clearTodoList() {

        const clearNow = document.getElementById('clear')

        clear == true ? setClear(false) : setClear(true)
        clearNow.addEventListener("click", () => setClear(false))

        setTodos([])
        localStorage.removeItem("local_todo")
    }

    const handleRemoveItem = (index) => {
        let currentItems = [...todos]
        setTodos((prevItems) => currentItems)

        // filtrando apenas os que nao exclui
        var filtrado = [...todos].filter(tds => {
            return tds.todo !== todos[index].todo
        })

        // adicionando a nova lista filtrada para o useState
        setTodos(() => filtrado)

        // adicionando a nova lista para o local Storage
        localStorage.setItem("local_todo", JSON.stringify(filtrado))
    }

    const handleUpdateItem = (index) => {
        let listItems = [...todos]
        setTodos(() => listItems)

        // Style
        const item = listItems[index]
        item.status == "pending" ?
            item.status = "completed" :
            item.status = "pending"

        // Update status on localStorage 
        const todosListString = JSON.stringify([...todos])
        // Bug here
        localStorage.setItem("local_todo", todosListString)[index]

    }

    const addNewItem = (obj) => {
        let newItems = [...todos]
        const final = JSON.stringify([...newItems, obj])
        localStorage.setItem(`local_todo`, final)

        let local_todo = JSON.parse(localStorage.getItem("local_todo"))
        setTodos(local_todo)
    }

    return (
        <div className={styles.home}>
            <DialogBox op={clear} />
            <div className={styles.todoWrapper}>
                <h1>To do List ({total}) | {confirm}</h1>
                <TextField
                    addNewItem={addNewItem}
                />
                <button id="clear" className={styles.clearBtn} onClick={clearTodoList}>
                    Clear
                </button>
                <div className={styles.list}>
                    <div className={styles.labels}>
                        <p>Task</p>
                        <p>Actions</p>
                    </div>
                    <List
                        data={todos}
                        handleRemoveItem={handleRemoveItem}
                        handleUpdateItem={handleUpdateItem}
                    />
                </div>
            </div>
        </div>
    )

}

export default Home