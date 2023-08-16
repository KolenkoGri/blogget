import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import {createPortal} from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';

export const Modal = ({closeModal, id}) => {
    const [post] = useCommentsData(id);
    const postData = post && post[0].data.children[0].data;
    const comments = post && post[1].data.children;
    const overlayRef = useRef(null);
    const closeX = useRef(null);

    const handleClick = (e) => {
        const target = e.target;
        if (target === overlayRef.current || target === closeX.current ||
          post && target === closeX.current.firstChild) {
            closeModal();
        }
    };

    const handleTouch = (e) => {
        if (e.code === 'Escape') {
            closeModal();
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
        post && <div className={style.overlay} ref={overlayRef}>
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

                <Comments comments = {comments}/>

                <button className={style.close}>
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
