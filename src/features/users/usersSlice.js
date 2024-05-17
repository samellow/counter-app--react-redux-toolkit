import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Gabriel Martinelli' },
    {id: '1', name: 'Bukayo Saka'},
    {id: '2', name: 'Martin Ordegard'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer