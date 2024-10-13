import { toast } from 'react-toastify';

import { useState } from 'react'
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([])

    const createNewToDo = (text: string) => {
        toast(`добавлена задача: "${text}" `, {
            position: "bottom-right"
        })
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newToDo])
    }

    const updateToDo = (toDoItem: ToDo) => {
        toast(`${toDoItem.isDone ? "доработать задачу" : "решена задача"}: "${toDoItem.text}" `, {
            position: "bottom-right"
        })
        const newTodods = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newTodods)
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodods = todos.filter((todo) => todo.id !== toDoItem.id)
        toast(`удалена задача: "${toDoItem.text}" `, {
            position: "bottom-right"
        })
        setTodos(newTodods)
    }

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />

        </>
    )
}