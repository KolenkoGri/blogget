import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formatData';
import Rate from './Rate';
import DeleteBtn from './DeleteBtn';
import {Text} from '../../../../UI/Text';

export const Post = ({postData}) => {
    const {title, author, ups, created} = postData.data;

    return (postData && <li className={style.post}>
        <img className={style.img} src={notphoto}/>
        <div className={style.content}>
            <Text As='h2' className={style.title}>
                <Text As='a' className={style.linkPost}
                    size={18} tsize={24} href='#post'>{title}</Text>
            </Text>
            <Text As='a' size={12} tsize={14} color='orange'
                className = {style.linkAuthor} href='#author'>{author}</Text>
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
