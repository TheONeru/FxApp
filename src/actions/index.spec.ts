
/*
// redux-sagaの使う機能のgeneraterをtestで使うには他の大変
// redux-saga-testなどのライブラリを使う必要がありそう？
import { describe, it } from 'mocha';
import {
    GET_DATA_REQUEST,
} from '../constants/ActionTypes';
import * as assert from 'power-assert';
import {
    rootSaga,
    getData,
    getDataSuccess,
    getDataFailure,
 } from './index';
import { take , call , put } from 'redux-saga/effects';

describe('rootSaga', () => {

    it('receives fetch request and succeeds to get data', () => {
        const saga = rootSaga();
        let ret = saga.next();
        assert.deepEqual(ret.value, take(GET_DATA_REQUEST));
        ret = saga.next();
        assert.deepEqual(ret.value, call(getData));
        ret = saga.next({ account:'test' });
        assert.deepEqual(ret.value, put(getDataSuccess({ account:'test' })));
        ret = saga.next();
        assert.deepEqual(ret.value, take(GET_DATA_REQUEST));
    });
    it('receives fetch request and failured to get data', () => {
        const saga = rootSaga();
        let ret = saga.next();
        assert.deepEqual(ret.value, take(GET_DATA_REQUEST));
        ret = saga.next();
        assert.deepEqual(ret.value, call(getData));
        ret = saga.next({ error:'Wrong' });
        assert.deepEqual(ret.value, put(getDataFailure({ error:'Wrong' })));
        ret = saga.next();
        assert.deepEqual(ret.value, take(GET_DATA_REQUEST));
    });
});

*/
