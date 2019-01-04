
import { all, takeLatest } from 'redux-saga/effects';
import { userRequest } from './user'
import { USER_REQUEST } from '../actions/types';

export default function* rootSaga() {
    return yield all([
        takeLatest(USER_REQUEST, userRequest),
    ]);
};