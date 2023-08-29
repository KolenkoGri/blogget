import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export const POSTS_REQUEST_SUCCESS_AFTER = 'POSTS_REQUEST_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_QUEUE = 'CHANGE_QUEUE';

export const postsRequest = () => ({
    type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
    type: POSTS_REQUEST_SUCCESS,
    data: data.children,
    after: data.after,
});

export const postsRequestSuccessAfter = (data) => ({
    type: POSTS_REQUEST_SUCCESS_AFTER,
    data: data.children,
    after: data.after,
});

export const postsRequestError = (error) => ({
    type: POSTS_REQUEST_ERROR,
    error,
});

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page,
});

export const changeQueue = (queue) => ({
    type: CHANGE_QUEUE,
    queue,
});

export const getPosts = (newPage) => (dispatch, getState) => {
    let page = getState().posts.page;
    let queue = getState().posts.queue;

    if (newPage) {
        page = newPage;
        dispatch(changePage(page));
        dispatch(changeQueue(0));
    }

    const token = getState().token.token;
    const after = getState().posts.after;
    const loading = getState().posts.loading;
    const isLast = getState().posts.isLast;

    if (!token || loading || isLast) return;
    dispatch(postsRequest());
    axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
            Authorization: `bearer ${token}`,
        },
    }).then(({data}) => {
        if (after) {
            dispatch(postsRequestSuccessAfter(data.data));
            // Загрузка после 2 промоток
            if (queue !== 2) {
                queue += 1;
                dispatch(changeQueue(queue));
                console.log(queue);
            } else {
                console.log(queue);
            }
            // Загрузка после 2 промоток
        } else {
            dispatch(postsRequestSuccess(data.data));
        }
    })
        .catch((err) => {
            dispatch(postsRequestError(err.message));
        });
};
