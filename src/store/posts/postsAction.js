import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
    type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
    type: POSTS_REQUEST_SUCCESS,
    data,
});

export const postsRequestError = (error) => ({
    type: POSTS_REQUEST_ERROR,
    error,
});

export const getPosts = () => (dispatch, getState) => {
    const token = getState().token.token;
    dispatch(postsRequest());
    axios(`${URL_API}/best`, {
        headers: {
            Authorization: `bearer ${token}`,
        },
    }).then(async ({data}) => {
        const items = data.data.children;
        await dispatch(postsRequestSuccess(items));
    })
        .catch((err) => {
            console.log(err);
            dispatch(postsRequestError(err.message));
        });
};
