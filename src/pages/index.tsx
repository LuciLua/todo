import List from "../components/List/List"
import React, { useState } from "react"
import { useEffect } from "react"

import styles from "../style/home.module.scss"
import TextField from "../components/TextField"
import DialogBox from "../components/DialogBox/DialogBox"

import useConfirm from "../hooks/useConfirm"
import useTotal from "../hooks/useTotal"

import { BiNotepad } from "react-icons/bi"

function Home() {

    const { confirm, setConfirm } = useConfirm()
    // const { total } = useTotal()

    const listTodo = []

    const [todos, setTodos] = useState<any>([])
    const [clear, setClear] = useState(false)

    // const [updateTotal, setUpdateTotal] = useState(total)

    useEffect(() => {
        formarObj()
        setTodos(listTodo)

        setClear(clear)
        // setUpdateTotal(total)
        // }, [clear, total])
    }, [clear])


    function formarObj() {
        // let local_todo = JSON.parse(localStorage.getItem("local_todo"))
        // if (local_todo){
        //     local_todo.map((todo_item) => {
        //         listTodo.push(todo_item)
        //     })
        // } else {
            listTodo.push({todo: "teste", status: "completed"})
        // }
    }

    async function clearTodoList() {

        const clearNow = document.getElementById('clear')

        clear == true ? setClear(false) : setClear(true)
        clearNow.addEventListener("click", () => setClear(false))

        confirm == true ? setConfirm(false) : setConfirm(true)
        console.log(confirm)

        if (confirm == true) {
            setTodos([])
            localStorage.removeItem("local_todo")
            // setUpdateTotal(0)
        } else {
            return
        }
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

        // setUpdateTotal(updateTotal - 1)
    }

    const handleUpdateItem = (index: any) => {
        let listItems = [...todos]
        setTodos(() => listItems)

        // Style
        const item = listItems[index]
        item.status == "pending" ?
            item.status = "completed" :
            item.status = "pending"

        // Update status on localStorage 
        const todosListString = JSON.stringify([...todos])

        const set_item_to_local = () => localStorage.setItem("local_todo", todosListString)[index]

        // localStorage.setItem("local_todo", "aaa")

        set_item_to_local

        console.log(localStorage.getItem("local_todo"))

    }

    const addNewItem = (obj) => {
        let newItems = [...todos]

        const espc = obj.todo === ""
            || obj.todo === " "
            || obj.todo === "  "
            || obj.todo === "   "

        // Excessoes de item (vazios ou apenas com espacos iniciais)
        if (espc) {
            return
        } else {

            console.log(obj.todo)

            const final = JSON.stringify([...newItems, obj])
            localStorage.setItem(`local_todo`, final)

            let local_todo = JSON.parse(localStorage.getItem("local_todo"))
            setTodos(local_todo)

            // Atualizar total sempre que adicionar novo item
            // setUpdateTotal(updateTotal + 1)
        }
    }

    return (
        <div className={styles.home}>
            <DialogBox op={clear} />
            <div className={styles.todoWrapper}>
                <h1>
                    <span><BiNotepad /></span>
                    {/* To do List ({updateTotal}) */}
                    To do List
                </h1>
                <TextField
                    addNewItem={addNewItem}
                />
                <button id="clear" className={styles.clearBtn} onClick={clearTodoList}>
                    Clear
                </button>
                <div className={styles.list}>
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