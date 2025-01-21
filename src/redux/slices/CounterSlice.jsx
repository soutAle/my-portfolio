import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        reset: (state) => {
            state.count = 0
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer 