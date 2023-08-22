import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../store/posts/postsAction';

export const useBestPosts = () => {
    const posts = useSelector((state) => state.posts.data);
    const token = useSelector((state) => state.token.token);
    const loading = useSelector((state) => state.posts.loading);
    const dispatch = useDispatch();
    posts && useEffect(() => {
        dispatch(getPosts());
    }, [token]);
    return [posts, loading];
};
