import { Action } from 'redux';
import {
    GET_DATA_FAILURE,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
}
from '../constants/ActionTypes';
import { call, put , fork, delay } from 'redux-saga/effects';
import { accessToken, accountId } from '../constants/OandaAPI';

interface GetDataRequest extends Action {
    type : string;
}

export const getDataRequest = (): GetDataRequest => {
    return {
        type : GET_DATA_REQUEST,
    };
};

interface GetDataSuccess extends Action {
    type : string;
    ret : Object;
}

export const getDataSuccess = (ret:Object) : GetDataSuccess => {
    return {
        ret,
        type : GET_DATA_SUCCESS,
    };
};

interface GetDataFailure extends Action {
    type : string;
    error : Object;
}

export const getDataFailure = (error:Object) : GetDataFailure => {
    return {
        error,
        type : GET_DATA_FAILURE,
    };
};

const URL = 'https://api-fxpractice.oanda.com/v3/accounts/'.concat(accountId);

export const getData = () => {
    return fetch(URL, {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
            Authorization : 'Bearer '.concat(accessToken),
        },
    }).then(res => res.json())
    .then((ret:Object) => ({ ret }))
    .catch((err:Object) => ({ err }));
};

function* runReuestData() {
    const { ret, err } = yield call(getData);
    if (ret && !err) {
        yield put(getDataSuccess(ret));
    }else {
        yield put(getDataFailure(err));
    }
}

export function* handleRequestData() {
    while (true) {
        // yield take(GET_DATA_REQUEST); // takeはdispatchを待つ
        yield fork(runReuestData);
        yield delay(5000);
    }
}

export function* rootSaga() {
    yield fork(handleRequestData);
}
