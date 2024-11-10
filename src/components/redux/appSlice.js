import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        open: false,
        emails: [],
        selectedMail: [],
        searchText: ""
    },
    reducers: {
        //actions 
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setEmails: (state, action) => {
            state.emails = action.payload;
        },
        setSelectedMail: (state, action) => {
            state.selectedMail = action.payload
        },
        setSearchtext: (state, action) => {
            state.searchText = action.payload
        }


    }
})
export const { setOpen, setEmails, setSelectedMail, setSearchtext } = appSlice.actions;
export default appSlice.reducer