import {
    COMMENTS_REQUEST,
    COMMENTS_REQUEST_SUCCESS,
    COMMENTS_REQUEST_ERROR
} from './commentsAction';

const initialState = {
    loading: false,
    data: [],
    error: '',
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: '',
                data: [],
            };
        case COMMENTS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                data: action.data
            };
        case COMMENTS_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: [],
            };

        default:
            return state;
    }
};
