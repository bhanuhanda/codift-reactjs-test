import { put, takeLatest } from 'redux-saga/effects';
import * as Types from "./types";
import axios from 'axios';
import { toast } from 'react-toastify';

export function* fetchPosts() {
    const endpoint = 'https://jsonplaceholder.typicode.com/comments?postId=1';
    try{
        const response = yield axios.get(endpoint);
        if(response.data){
            toast.success('Posts fetched successfully...');
            yield put({
                type: Types.FETCH_POSTS.SUCCESS,
                payload: {
                    posts: response.data !== undefined ? response.data : []
                }
            });
        }
    }
    catch(error){
        toast.error('Failed to fetch posts. Please retry...');
        yield put({
            type: Types.FETCH_POSTS.FAILED,
            payload: error.message
        });
    }
}

function* watchers() {
    yield takeLatest(Types.FETCH_POSTS.REQUEST, fetchPosts);
}

export default watchers;