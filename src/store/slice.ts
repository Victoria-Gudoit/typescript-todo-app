import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getUniqId} from "./utils"


export interface Todo {
    id: number;
    label: string;
    isDone: boolean;
}

const initialState: Todo[] = []

 export const {actions, reducer} = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{todo: Omit<Todo, 'id'>}>) => {
            state.push({id: getUniqId(state), ...action.payload.todo})
        },
        deleteTodo: (state, action: PayloadAction<{id: number}>) => {
            return state.filter(({id}) => id !== action.payload.id)
        },
        toggleTodo: (state, action: PayloadAction<{id: number}>) => {
            const todo = state.find(({id}) => id === action.payload.id)
            if(todo) {
                todo.isDone = !todo.isDone
            }
        },
    },
})
