import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formatData';
import Rate from './Rate';
import DeleteBtn from './DeleteBtn';
import {Text} from '../../../../UI/Text';
import {useState} from 'react';
import Modal from '../../../Modal';

export const Post = ({postData}) => {
    const {title, author, ups, created, thumbnail,
        selftext: markdown, id} = postData.data;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (postData && <li className={style.post}>
        <img className={style.img} src={thumbnail ?
            thumbnail.replace(/\?.*$/, '') : notphoto} alt={title}/>
        <div className={style.content}>
            <Text As='h2' className={style.title} >
                <Text As='a' className={style.linkPost}
                    size={18} tsize={24} href='#post'
                    onClick = {() => {
                        setIsModalOpen(true);
                    }}
                >{title}
                </Text>
            </Text>
            <Text As='a' size={12} tsize={14} color='orange'
                className = {style.linkAuthor} href='#author'>{author}
            </Text>
            {isModalOpen && <Modal markdown = {markdown}
                title = {title} author = {author}
                closeModal = {() => setIsModalOpen(false)} id={id}/>}
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
