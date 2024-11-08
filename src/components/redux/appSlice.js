import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        open: false,
        emails: [],
    },
    reducers: {
        //actions 
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setEmails: (state, action) => {
            state.emails = action.payload;
        }
    }
})
export const { setOpen, setEmails } = appSlice.actions;
export default appSlice.reducer