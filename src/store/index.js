import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "./rootSaga";
import authReducer from "./auth/slice";
import galleriesReducer from "./galleries/slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        auth: authReducer,
        galleries: galleriesReducer,
    },
    middleware: [
        ...getDefaultMiddleware({thunk: false}),
        sagaMiddleware,
    ]
});

for(let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}

export default store;