import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum FILTER {
    ALL = 'ALL',
    DONE = 'DONE',
    TODO = 'TODO',
}

export const {actions, reducer} = createSlice({
    name: "filter",
    initialState: FILTER.ALL,
    reducers: {
        toggleFilter:( 
            state, 
            actions: PayloadAction<{value: FILTER}>) => {
            return actions.payload.value;
        }
    }
})
