import {useSelector} from 'react-redux';
import {Text} from '../../../../ui/Text/index';
import style from './FirstPage.module.css';

export const FirstPage = () => {
  const token = useSelector((state) => state.token.token);
  console.log(Text);
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
        <>
          <Text As="h2" center color="orange">
            Авторизуйтесь
          </Text>
        </>
      )}
    </>
  );
};
