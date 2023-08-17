import {createStore} from 'redux';
import {getToken, setToken} from '../api/token';

const initialState = {
    comment: 'Привет Redux',
    token: getToken(),
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_COMMENT = 'DELETE_COMMENT';
export const updateComment = comment => ({
    type: UPDATE_COMMENT,
    comment,
});

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                comment: action.comment,
            };
        case UPDATE_TOKEN:
            setToken(action.token);
            return {
                ...state,
                token: action.token,
            };
        case DELETE_COMMENT:
            return {
                ...state,
                token: action.comment,
            };

        default:
            return state;
    }
};

export const store = createStore(rootReducer);
