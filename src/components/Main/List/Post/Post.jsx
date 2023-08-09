import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formatData';
import Rate from './Rate';
import DeleteBtn from './DeleteBtn';

export const Post = ({postData}) => {
    const {title, author, ups, date} = postData;
    return <li className={style.post}>
        <img className={style.img} src={notphoto}/>
        <div className={style.content}>
            <h2 className={style.title}>
                <a className={style.linkPost} href='#post'>{title}</a>
            </h2>
            <a className = {style.linkAuthor} href='#author'>{author}</a>
        </div>

        <Rate ups = {ups}/>

        <time className={style.date} dateTime={date}>{formatDate(date)}</time>

        <DeleteBtn/>

    </li>;
};


Post.propTypes = {
    postData: PropTypes.object,
};
