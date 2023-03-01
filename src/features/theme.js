import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggle: (state) => state === 'light' ? 'dark' : 'light',
        set: (state, action) => action.payload
    }
})

export const { toggle, set } = actions

export default reducer