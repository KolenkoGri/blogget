import style from './List.module.css';
import Post from './Post';
import {useBestPosts} from '../../../hooks/useBestPosts';
import AuthLoader from '../../Header/Auth/AuthLoader';

export const List = () => {
    const [posts, loading] = useBestPosts();
    return (
        loading ? <AuthLoader/> : <ul className={style.list}>
            {posts.map((post) => (
                <Post key={post.data.id} postData = {post}/>
            ))}
        </ul>
    );
};
