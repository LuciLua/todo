import List from "../components/List/List"
import { isValidElement, useState } from "react"
import { useEffect } from "react"

import styles from "../style/home.module.scss"
import TextField from "../components/TextField"

interface propsHandle {
    index: any
}

function Home() {

    const dummyData = []

    const [todos, setTodos] = useState([])

    useEffect(() => {
        formarObj()
        setTodos(dummyData)
    }, [])

    function formarObj() {
        let local_todo = JSON.parse(localStorage.getItem(`local_todo`))
        console.log(local_todo)

        if (local_todo) {
            local_todo.map((todo_item) => {
                dummyData.push(todo_item)
            })
        }
    }

    function clearTodoList() {
        localStorage.removeItem("local_todo")
        setTodos([])
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

        // todos.length > 0 && (
        <div className={styles.home}>
            <div className={styles.todoWrapper}>
                <h1>To do List</h1>
                <TextField
                    addNewItem={addNewItem}
                />
                <button style={{ height: 30, width: 100, border: "none", borderRadius: 5, marginLeft: "auto", marginBottom: 10, cursor: "pointer" }} onClick={clearTodoList}>Clear</button>
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
        // )
    )

}

export default Home