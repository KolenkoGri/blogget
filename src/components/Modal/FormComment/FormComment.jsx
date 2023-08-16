import {useRef, useState} from 'react';
import style from './FormComment.module.css';

export const FormComment = () => {
    const inputRef = useRef(null);
    const [sendView, setSendView] = useState(false);

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

                <textarea ref={inputRef} rows="5" cols="33"
                    placeholder='Введите Ваш комментарий'>
                </textarea>
                <button>Отправить</button>
            </form>}
        </>

    );
};

