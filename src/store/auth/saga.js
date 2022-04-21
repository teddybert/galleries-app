import {put, call, takeLatest} from 'redux-saga/effects';
import {
    setToken, 
    getActiveUser,
    setActiveUser, 
    register,
    login,
    logout, } from './slice';
import authService from '../../services/AuthService';

function* registerHandler(action) {
    const {user, token} = yield call(authService.register, action.payload);
    yield put(setToken(token));
    yield put(setActiveUser(user));
}

function* loginHandler(action) {
    const {user, token} = yield call(authService.login, action.payload);
    yield put(setToken(token));
    yield put(setActiveUser(user));
}

function* logoutHandler() {
    yield call(authService.logout);
    yield put(setToken(null));
    yield put(setActiveUser(null));
}

function* getActiveUserHandler() {
    const data = yield call(authService.getActiveUser);
    yield put(setActiveUser(data));
}

export function* watchSagas() {
    yield takeLatest(register.type, registerHandler);
    yield takeLatest(login.type, loginHandler);
    yield takeLatest(logout.type, logoutHandler);
    yield takeLatest(getActiveUser.type, getActiveUserHandler);
}