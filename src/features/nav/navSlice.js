import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
  status: 'idle',
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,

  reducers: {
    up: (state) => {
      state.value = false
    },
    down: (state) => {
      state.value = true
    },
  },
})

export const { up, down } = navSlice.actions

export const selectCount = (state) => state.nav.value

export default navSlice.reducer
