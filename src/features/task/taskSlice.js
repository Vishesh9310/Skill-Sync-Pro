import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTasks: [],
  filteredTasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.allTasks.push(action.payload);
      state.filteredTasks = state.allTasks;
    },
    filterTasks: (state, action) => {
      const filter = action.payload;
      state.filteredTasks = filter
        ? state.allTasks.filter(task => task.status === filter)
        : state.allTasks;
    },
  },
});

export const { addTask, filterTasks } = taskSlice.actions;
export default taskSlice.reducer;
