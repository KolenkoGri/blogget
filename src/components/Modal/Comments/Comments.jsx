import style from './Comments.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatData';

export const Comments = ({comments}) => {
    if (!comments) {
        return (
            <h2>Загрузка данных</h2>
        );
    } else {
        return (comments &&
            <>
                <h3>Комментарии:</h3>
                {
                    comments.map((e) => (
                        <div key={e.data.id} className="post">
                            <div className={style.author}>{e.data.author}</div>
                            <div className={style.content}>{e.data.body ?
                                e.data.body : <p>Нет комментариев</p>}</div>
                            <time className={style.date}
                                dateTime={e.data.created}>
                                {e.data.created ? formatDate(e.data.created) :
                                'Время публикации не доступно'}
                            </time>
                            <div className={style.line}></div>
                        </div>
                    ))
                }
            </>
        );
    }
};

Comments.propTypes = {
    comments: PropTypes.array,
};
