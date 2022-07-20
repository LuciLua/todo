import List from "../components/List/List"
import { isValidElement, useState } from "react"
import { useEffect } from "react"

import styles from "../style/home.module.scss"
import TextField from "../components/TextField"

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
        let local_todo = JSON.parse(localStorage.getItem(`local_todo`))
        localStorage.removeItem(`local_todo`)

        setTodos(prevItems => local_todo)
    }

    const handleRemoveItem = (index) => {
        let currentItems = [...todos]
        const item = currentItems[index]
        setTodos((prevItems) => currentItems)

        // corrigir
        console.log("removido? ", JSON.parse(localStorage.getItem("local_todo"))[index])
        console.log(item)

    }

    const handleUpdateItem = (index) => {
        let currentItems = [...todos]
        const item = currentItems[index]
        setTodos((prevItems) => currentItems)

        // Ok visual
        item.status == "pending" ?
            item.status = "completed" :
            item.status = "pending"

        const objtest = JSON.stringify(
            [
                // {
                //     todo: "KKK",
                //     status: "completed"
                // },
                // {
                //     todo: "KKKasd",
                //     status: "pending"
                // }
                ...todos
            ]
        )

        // console.log(JSON.parse(localStorage.getItem("local_todo"))[index])
        localStorage.setItem("local_todo", objtest)[index]

    }

    const addNewItem = (obj) => {
        let newItems = [...todos]
        newItems.push(obj)
        const final = JSON.stringify([...newItems, obj])
        localStorage.setItem(`local_todo`, final)

        let local_todo = JSON.parse(localStorage.getItem(`local_todo`))
        setTodos(prevItems => local_todo)

        console.log(todos)
        // console.log(local_todo)

    }

    return (

        // todos.length > 0 && (
        <div className={styles.home}>
            <div className={styles.todoWrapper}>
                <h1>To do List</h1>
                <TextField
                    addNewItem={addNewItem}
                />
                <button style={{ height: 30, width: 100, border: "none", borderRadius: 5, marginLeft: "auto", marginBottom: 10 }} onClick={clearTodoList}>Clear</button>
                <List
                    data={todos}
                    handleRemoveItem={handleRemoveItem}
                    handleUpdateItem={handleUpdateItem}
                />
            </div>
        </div>
        // )
    )

}

export default Home