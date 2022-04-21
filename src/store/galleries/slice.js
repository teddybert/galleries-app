import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getGalleries: () => {},
  getGallery: () => {},
  create: () => {},
  edit: () => {},
  deleteGallery: () => {},
};

const galleriesSlice = createSlice({
  name: "galleries",
  initialState: {
    galleriesPage: [],
    gallery: null,
  },
  reducers: {
    setGalleries: (state, action) => {
      state.galleries = action.payload;
    },
    setGallery: (state, action) => {
      state.gallery = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  deleteGallery,
  getAll,
  get,
  create,
  edit,
  setGalleries,
  setGallery,
  getGallery,
  getGalleries,
} = galleriesSlice.actions;
export default galleriesSlice.reducer;
