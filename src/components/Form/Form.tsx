import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { updateAction } from '../../feature/todoText'
import { FormControl, FormBlock, FormField, FormLabel, FormWrapper } from './Form.styled'

import plusIcon from '../../assets/images/plus.png'

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
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField
                        value={todoText}
                        type="text"
                        onChange={(e) => dispatch(updateAction(e.target.value))}
                    />
                    <FormControl $icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}