import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 2,
    count: 0,
    email: ""
  },
  reducers: {
    increment: state => {
      
      state.value += 1
      state.count +=1
    },
    decrement: state => {
      state.value -= 1
      state.count +=1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    multiply:(state)=>{
        state.value=state.value*2
        state.count+=1
    },
    theemail:(state,action)=>{
      state.email=action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,multiply,theemail } = counterSlice.actions

export default counterSlice.reducer