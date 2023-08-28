import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formatData';
import Rate from './Rate';
import DeleteBtn from './DeleteBtn';
import {Text} from '../../../../UI/Text';
import {Link, useParams} from 'react-router-dom';

export const Post = ({postData}) => {
    const {title, author, ups, created, thumbnail, id} = postData.data;
    const {page} = useParams();


    return (postData && <li className={style.post}>
        <img className={style.img} src={thumbnail ?
            thumbnail.replace(/\?.*$/, '') : notphoto} alt={title}/>
        <div className={style.content}>
            <Text As='h2' className={style.title} >
                <Link className={style.linkPost}
                    to={`/category/${page}/post/${id}`}>
                    <Text bold size={18} tsize={24}>
                        {title}
                    </Text>
                </Link>
            </Text>
            <Text As='a' size={12} tsize={14} color='orange'
                className = {style.linkAuthor} href='#author'>{author}
            </Text>
        </div>

        <Rate ups = {ups}/>

        <time className={style.date} dateTime={created}>
            {formatDate(created)}</time>

        <DeleteBtn/>

    </li>);
};


Post.propTypes = {
    postData: PropTypes.object,
};
