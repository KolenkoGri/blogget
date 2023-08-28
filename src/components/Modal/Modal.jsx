import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import {createPortal} from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';
import AuthLoader from '../../UI/AuthLoader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
    const {id, page} = useParams();
    const navigate = useNavigate();
    const [comments, loading] = useCommentsData(id);
    const postData = comments && comments[0];
    const overlayRef = useRef(null);
    const closeX = useRef(null);

    const handleClick = (e) => {
        const target = e.target;
        if (target === overlayRef.current || target === closeX.current ||
            loading && target === closeX.current.firstChild) {
            navigate(`/category/${page}`);
        }
    };

    const handleTouch = (e) => {
        if (e.code === 'Escape') {
            navigate(`/category/${page}`);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener('keyup', handleTouch);
        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('click', handleTouch);
        };
    }, []);

    return createPortal(
        loading ? <AuthLoader/> :
        postData && <div className={style.overlay} ref={overlayRef}>
            <div className={style.modal}>
                <h2 className={style.title}>
                    {postData.title}</h2>
                <div className={style.content}>
                    <Markdown options={{
                        overrides: {
                            a: {
                                props: {
                                    target: '_blank',
                                }
                            }
                        }
                    }}>
                        {postData.selftext}
                    </Markdown>
                </div>
                <p className={style.author}>
                    {postData.author}
                </p>

                <FormComment/>

                <Comments comments = {comments[1]}/>

                <button className={style.close} onClick={() => {
                    navigate(`/category/${page}`);
                }}>
                    <CloseIcon ref={closeX}/>
                </button>
            </div>
        </div>,
        document.getElementById('modal-root'),
    );
};

Modal.propTypes = {
    id: PropTypes.string,
    closeModal: PropTypes.func,
};
