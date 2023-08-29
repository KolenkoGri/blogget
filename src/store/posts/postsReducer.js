import {
    POSTS_REQUEST,
    POSTS_REQUEST_SUCCESS,
    POSTS_REQUEST_ERROR,
    POSTS_REQUEST_SUCCESS_AFTER,
    CHANGE_PAGE,
    CHANGE_QUEUE
} from './postsAction';

const initialState = {
    loading: false,
    data: [],
    error: '',
    after: '',
    isLast: false,
    page: '',
    queue: 0,
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case POSTS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                data: action.data,
                after: action.after,
                isLast: !action.after,
            };
        case POSTS_REQUEST_SUCCESS_AFTER:
            return {
                ...state,
                loading: false,
                error: '',
                data: [...state.data, ...action.data],
                after: action.after,
                isLast: !action.after,
            };
        case POSTS_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page,
                after: '',
                isLast: false,
            };

        case CHANGE_QUEUE:
            return {
                ...state,
                queue: action.queue,
            };

        default:
            return state;
    }
};
