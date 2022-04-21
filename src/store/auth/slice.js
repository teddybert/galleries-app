import {createSlice} from "@reduxjs/toolkit";

const middlewareActions = {
    getActiveUser: () => {},
    login: () => {},
    register: () => {},
    logout: () => {},
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token"),
        activeUser: null,
    },
    reducers: {
        setToken: (state,action) => {
            state.token = action.payload;
        },
        setActiveUser: (state,action) => {
            state.activeUser = action.payload;
        },
        ...middlewareActions,
    },
});

export const {
    setToken, 
    login, 
    logout, 
    register, 
    getActiveUser, 
    setActiveUser } = authSlice.actions;

export default authSlice.reducer;