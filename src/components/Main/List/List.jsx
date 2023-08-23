import style from './List.module.css';
import Post from './Post';
import {useBestPosts} from '../../../hooks/useBestPosts';
import AuthLoader from '../../../UI/AuthLoader';

export const List = () => {
    const [posts, loading] = useBestPosts();
    console.log(posts.length);
    return (
        loading ? <AuthLoader/> : posts.length === 0 ?
        <>
            <div className={style.wrapper}>
                <p className={style.notify}>Вы не авторизованы</p>
            </div>
        </> :
        <ul className={style.list}>
            {posts.map((post) => (
                <Post key={post.data.id} postData = {post}/>
            ))}
        </ul>
    );
};
