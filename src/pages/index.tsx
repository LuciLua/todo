import List from "../components/List"
import { useState } from "react"
import { useEffect } from "react"

import styles from "../style/home.module.scss"
import TextField from "../components/TextField"

function Home() {

    // const dummyData = [
    //     { todo: "Hard working in some project", status: "pending" },
    //     { todo: "Make something for me eat", status: "pending" },
    //     { todo: "Drink two glasses of water", status: "pending" },
    //     { todo: "Practice exercices", status: "pending" },
    //     { todo: "Watch series", status: "pending" }
    // ]

    const dummyData = []

    const [todos, setTodos] = useState([])

    useEffect(() => {
        formarObj()
        setTodos(dummyData)
    }, [])

    function formarObj() {

        if (localStorage.getItem("todo")) {
            // consulta no localStorage
            const local_todo = localStorage.getItem(`todo`)
            const local_status = localStorage.getItem(`status`)
            // junta
            const join = { todo: local_todo, status: local_status }
            // puxa pra lista
            dummyData.push(join)
        }
    }

    const handleRemoveItem = (index) => {
        let currentItems = [...todos]
        currentItems.splice(index, 1)
        console.log({ index, currentItems })

        localStorage.removeItem("todo")
        localStorage.removeItem("status")

        setTodos((prevItems) => currentItems)


    }

    const handleUpdateItem = (index) => {
        let currentItems = [...todos]
        const item = currentItems[index]

        item.status == "pending" ?
            item.status = "completed" :
            item.status = "pending"

        // console.log({ index, currentItems })

        localStorage.getItem("status") == "pending" ?
            localStorage.setItem("status", "completed") :
            localStorage.setItem("status", "pending")

        setTodos((prevItems) => currentItems)

        console.log(localStorage.getItem("todo"))
        console.log(localStorage.getItem("status"))
    }

    const addNewItem = (obj) => {
        let newItems = [...todos]
        newItems.push(obj)
        console.log([obj, newItems])

        localStorage.setItem(`todo`, obj.todo)
        localStorage.setItem(`status`, obj.status)

        setTodos(prevItems => newItems)

    }

    // if (!todos.length > 0) {
    //     return <p>Requesting data...</p>
    // }

    return (

        // todos.length > 0 && (
        <div className={styles.home}>
            <div className={styles.todoWrapper}>
                <h1>To do List</h1>
                <p>(só salva 1 por enquanto)</p>
                <TextField
                    addNewItem={addNewItem}
                />
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