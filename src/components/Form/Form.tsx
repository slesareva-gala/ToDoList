import './Form.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { updateAction } from '../../feature/todoText'


export const Form = (props: { createNewToDo: Function }) => {
    const todoText = useSelector((state: RootState) => state.todoText.text)
    const dispatch = useDispatch()

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (todoText) {
            props.createNewToDo(todoText)
            dispatch(updateAction(""))
        }
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        value={todoText}
                        type="text"
                        onChange={(e) => dispatch(updateAction(e.target.value))}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}