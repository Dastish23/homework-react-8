import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const addNote = createAsyncThunk(
    'notes/addNote',
    async (note, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://dummyjson.com/api/v1/note', note);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateNote = createAsyncThunk(
    'notes/updateNote',
    async (note, { rejectWithValue }) => {
        try {
            const response = await axios.put(`https://dummyjson.com/api/v1/note/${note.id}`, note);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
 const notesSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(addNote.fulfilled, (state, action) => {
            state.push(action.payload);
         })
         .addCase(updateNote.fulfilled, (state, action) => {
            const { id, completed } = action.payload;
            const noteToUpdate = state.find((note) => note.id === id);
            if (noteToUpdate) {
                noteToUpdate.completed = completed;
            }
         });
    },
});

export default notesSlice.reducer
 

 
