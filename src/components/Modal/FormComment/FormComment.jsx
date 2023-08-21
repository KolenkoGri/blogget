import {useContext, useRef, useState} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';

export const FormComment = () => {
    // const store = useStore();
    // const value = store.getState().comment; Это равнозначно строке ниже!!!
    const value = useSelector(state => state.comment);
    const dispatch = useDispatch();
    const {auth} = useContext(authContext);
    const inputRef = useRef(null);
    const [sendView, setSendView] = useState(false);

    const handleChange = (e) => {
        dispatch(updateComment(e.target.value));
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        const form = document.querySelector('#form__ref');
        form.reset();
    };
    return (
        <>
            <button className = {style.btn}
                type='button' onClick={() => setSendView(!sendView)}>
                {sendView ? `Скрыть форму с комментариями` :
                    `Открыть форму с комментариями`}
            </button>
            {sendView &&
            <form id='form__ref'
                onSubmit={handlerSubmit}
                className={style.layer}>

                <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
                <textarea ref={inputRef} rows="5" cols="33"
                    value={value}
                    onChange={handleChange}
                    placeholder='Введите Ваш комментарий'>
                </textarea>
                <button>Отправить</button>
            </form>}
        </>

    );
};

