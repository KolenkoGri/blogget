import {useSelector} from 'react-redux';
import style from './FirstPage.module.css';

export const FirstPage = () => {
  const token = useSelector((state) => state.token.token);
  return (
    <>
      {token ? (
        <div className={style.center}>
          <h2>
            Стартовая страница
          </h2>
          <p>
            Добро пожаловать
          </p>
          <p>
            Выберите категорию
          </p>
        </div>
      ) : (
        <div className={style.center}>
          <h2>
            Авторизуйтесь
          </h2>
        </div>
      )}
    </>
  );
};
