import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import textReducer from './feature/todoText'
import themeReducer from './feature/themeList'

import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

export const store = configureStore({
    reducer: {
        todoList: todoReducer,
        todoText: textReducer,
        themeList: themeReducer,
    },
    preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch