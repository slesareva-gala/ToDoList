import { ToDo } from "../../models/todo-item"
import { ListItemLink } from "./ListItem.styled"

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <ListItemLink
            $done={todo.isDone}
            rel="noreferrer"
            to={`/list/${todo.id}`}
        >{todo.text}</ListItemLink>
    )
}
