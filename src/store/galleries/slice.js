import {createSlice} from "@reduxjs/toolkit";

const middlewareActions = {
    getGallery: () => {},
}

const galleriesSlice = createSlice({
    name: "galleries",
    initialState: {
        gallery: "",
    },
    reducers: {
        setGallery: (state, action) => {
            state.gallery = action.payload
        },
        ...middlewareActions,
    },
});

export const {getGallery, setGallery} = galleriesSlice.actions;
export default galleriesSlice.reducer;