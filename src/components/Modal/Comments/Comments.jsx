import style from './Comments.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatData';
import AuthLoader from '../../../UI/AuthLoader';

export const Comments = ({comments}) => {
    if (!comments) {
        return (
            <AuthLoader/>
        );
    } else {
        return (comments &&
            <>
                <h3>Комментарии:</h3>
                {
                    comments.map((e) => (
                        <div key={e.id} className="post">
                            <div className={style.author}>{e.author}</div>
                            <div className={style.content}>{e.body ?
                                e.body : <p>Нет комментариев</p>}</div>
                            <time className={style.date}
                                dateTime={e.created}>
                                {e.created ? formatDate(e.created) :
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
