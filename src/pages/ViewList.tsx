import { useSelector } from "react-redux"
import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"
import { RootState } from "../store"
import { PageWrapper } from "./Pages.styled"

export const ViewList = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)

    return (
        <PageWrapper>
            {
                todoList.map((todo: ToDo) => {
                    return (<ListItem todo={todo} key={todo.id} />)
                })
            }
        </PageWrapper>
    )
}