import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TextTodoState {
    text: string
}

const initialState: TextTodoState = {
    text: "",
}

export const textSlice = createSlice({
    name: 'todoText',
    initialState,
    reducers: {
        updateAction: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    },
})

export const { updateAction } = textSlice.actions
export default textSlice.reducer