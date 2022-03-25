import { createSlice } from '@reduxjs/toolkit'

let itungan = JSON.parse(localStorage.getItem("counter"));
if(itungan === null){
    localStorage.setItem("counter", 0);
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: itungan,
    },
    reducers: {
        increment: (state) => {
            // state.value += 1
            localStorage.setItem("counter", state.value += 1);
        },
        decrement: (state) => {
            // state.value -= 1
            localStorage.setItem("counter", state.value -= 1);
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer