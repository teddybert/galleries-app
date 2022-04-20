import {getGallery, setGallery} from "./slice";
import galleryService from "../../services/GalleryService";
import {put, takeLatest, call} from "redux-saga/effects";

// function* getGalleriesHandler() {
//     const data = yield call(galleryService.getAll());
//     yield put(setGalleries(data.value));
// }

function* getGalleryHandler(action) {
    const data = yield call(galleryService.get, action.payload);
    yield put(setGallery(data.value));
}

export function* watchSagas() {
    // yield takeLatest(getGalleries.type, getGalleriesHandler);
    yield takeLatest(getGallery.type, getGalleryHandler);
}