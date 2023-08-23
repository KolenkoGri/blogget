import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getComments} from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
    const token = useSelector(state => state.token.token);
    const comments = useSelector((state) => state.comments.data);
    const loading = useSelector((state) => state.posts.loading);
    const dispatch = useDispatch();

    console.log(comments, loading, id);
    comments && useEffect(() => {
        dispatch(getComments(id));
    }, [token]);
    return [comments, loading];
};
