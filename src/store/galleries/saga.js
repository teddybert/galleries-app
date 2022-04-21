import {
    getGalleries,
    setGalleries,
    getGallery, 
    setGallery } from "./slice";
import galleryService from "../../services/GalleryService";
import {put, takeLatest, call} from "redux-saga/effects";

function* getGalleriesHandler() {
    const data = yield call(galleryService.getGalleries);
    yield put(setGalleries(data.value));
}

function* getGalleryHandler(action) {
    const data = yield call(galleryService.getGallery, action.payload);
    yield put(setGallery(data.value));
}

// function* createHandler(action) {
    // const data = yield call(galleryService.create, action.payload);
    // yield put()
// }

// function* editHandler(action) {
    // const data = yield call(galleryService.edit, action.payload);
// }

// function* deleteGalleryHandler() {
    // const data = yield call(galleryService.deleteGallery);
// }

export function* watchSagas() {
    yield takeLatest(getGalleries.type, getGalleriesHandler);
    yield takeLatest(getGallery.type, getGalleryHandler);
    // yield takeLatest(create.type, createHandler);
    // yield takeLatest(edit.type, editHandler);
    // yield takeLatest(deleteGallery.type, deleteGalleryHandler);
}