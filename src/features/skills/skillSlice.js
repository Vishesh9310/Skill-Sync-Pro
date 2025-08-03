import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const skillSlice = createSlice({
    name: 'skill',
    initialState,
    reducers:{
        addSkill(state, action){
            state.push(action.payload);
        },
        updateSkill(state, action){
            return state.map(skill=>
                skill.id === action.payload.id? action.payload : skill
            );
        },
        deleteSkill(state, action){
            return state.filter(skill => skill.id !== action.payload);
        },
    },
});

export const {addSkill, updateSkill, deleteSkill} = skillSlice.actions;
export default skillSlice.reducer;