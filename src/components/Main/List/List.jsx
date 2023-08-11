import style from './List.module.css';
import Post from './Post';
export const List = () => {
    const postsData = [
        {
            thumbnail: '',
            title: 'Title1',
            author: 'Nickname1',
            ups: 21,
            date: '2023-08-09T09:45:00.000Z',
            id: 111,
        },
        {
            thumbnail: '',
            title: 'Title2',
            author: 'Nickname2',
            ups: 22,
            date: '2023-08-09T09:45:00.000Z',
            id: 222,
        },
        {
            thumbnail: '',
            title: 'Title3',
            author: 'Nickname3',
            ups: 23,
            date: '2023-08-09T09:45:00.000Z',
            id: 333,
        },
        {
            thumbnail: '',
            title: 'Title4',
            author: 'Nickname4',
            ups: 24,
            date: '2023-08-09T09:45:00.000Z',
            id: 444,
        }
    ];
    return (
        <ul className={style.list}>
            {postsData.map((post) => (
                <Post key={post.id} postData = {post}/>
            ))}
        </ul>);
};
