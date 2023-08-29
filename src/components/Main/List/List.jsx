import style from './List.module.css';
import Post from './Post';
import {useBestPosts} from '../../../hooks/useBestPosts';
// import AuthLoader from '../../../UI/AuthLoader';
import {useEffect, useRef} from 'react';
import {useDispatch
    , useSelector
} from 'react-redux';
import {getPosts} from '../../../store/posts/postsAction';
import {Outlet, useParams} from 'react-router-dom';
import {changeQueue} from '../../../store/posts/postsAction';

export const List = () => {
    const loading = useBestPosts()[1];
    const posts = useSelector(state => state.posts.data);
    const queue = useSelector(state => state.posts.queue);
    const endList = useRef(null);
    const dispatch = useDispatch();
    const {page} = useParams();

    useEffect(() => {
        dispatch(getPosts(page));
    }, [page]);

    useEffect(() => {
        if (!posts.length) return;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                dispatch(getPosts());
            }
        }, {
            rootMargin: '100px',
        });
        observer.observe(endList.current);
        return () => {
            if (endList.current) {
                observer.unobserve(endList.current);
            }
        };
    }, [posts]);

    return (
        loading ?
        <>
            <ul className={style.list}>
                {queue === 2 && <button onClick={() => {
                    dispatch(changeQueue(1));
                }}>Загрузить ещё</button> ||
                posts.map((post) => (
                    <Post key={post.data.id} postData = {post}/>
                ))}
                <li ref={endList} className={style.end}/>
            </ul>
            <Outlet/>
        </> :
        <>
            <ul className={style.list}>
                {queue === 2 && <button onClick={() => {
                    dispatch(changeQueue(1));
                }}>Загрузить ещё</button> || posts.map((post) => (
                    <Post key={post.data.id} postData = {post}/>
                ))}
                <li ref={endList} className={style.end}/>
            </ul>
            <Outlet/>
        </>
    );
};
