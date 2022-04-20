import {createSlice} from "@reduxjs/toolkit";

const middlewareActions = {
    getUser: () => {},
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        ...middlewareActions,
    },
});

export const {getUser, setUser} = authSlice.actions;
export default authSlice.reducer;