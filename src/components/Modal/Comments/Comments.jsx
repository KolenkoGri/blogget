import style from './Comments.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatData';

export const Comments = ({comments}) => {
    if (!comments) {
        return (
            <h2>Загрузка данных</h2>
        );
    }

    return (
        <>
            <h3>Комментарии:</h3>
            {
                comments.map((e) => (
                    <div key={e.data.id} className="post">
                        <div className={style.author}>{e.data.author}</div>
                        <div className={style.content}>{e.data.body ?
                            e.data.body : <p>Нет комментариев</p>}</div>
                        <div className={style.date}>
                            {formatDate(e.data.created)}
                        </div>
                        <div className={style.line}></div>
                    </div>
                ))
            }
        </>
    );
};

Comments.propTypes = {
    comments: PropTypes.array,
};
