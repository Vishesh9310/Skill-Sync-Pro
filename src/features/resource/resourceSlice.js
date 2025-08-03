import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const resourceSlice = createSlice({
    name: 'resources',
    initialState: [],
    reducers: {
        addResource: (state, action) => {
            state.push({...action.payload, id: uuidv4()});
        },
    },
});

export const {addResource} = resourceSlice.actions;
export default resourceSlice.reducer;