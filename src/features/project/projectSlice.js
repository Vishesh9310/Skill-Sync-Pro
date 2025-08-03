
import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        addProject: (state, action) => {
            state.push(action.payload);
        },
        deleteProject: (state, action) => {
            return state.filter(project => project.id !== action.payload);
        },
    }
});

export const {addProject, deleteProject} = projectSlice.actions;
export default projectSlice.reducer;