import {commentReducer} from './commentReducer';
import {tokenReducer} from './token/tokenReducer';
import {tokenMiddleware} from './token/actionToken';
import {authReducer} from './auth/authReducer';
import bestReducer from './bestPost/bestSlice';
import commentsReducer from './comment/commentsSlice';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    comment: commentReducer,
    token: tokenReducer,
    auth: authReducer,
    best: bestReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
