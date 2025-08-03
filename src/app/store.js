import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import skillReducer from '../features/skills/skillSlice'
import projectReducer from '../features/project/projectSlice'
import resourceReducer from '../features/resource/resourceSlice'
import taskReducer from '../features/task/taskSlice'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        skills: skillReducer,
        projects: projectReducer,
        resources: resourceReducer,
        task: taskReducer,
    }
})