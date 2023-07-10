import { configureStore } from "@reduxjs/toolkit";
import notesReduer from './TodoSlice'

const store = configureStore({
    reducer: {
        notes: notesReduer
    }
})
export default store