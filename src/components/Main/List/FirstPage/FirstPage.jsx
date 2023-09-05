import {useSelector} from 'react-redux';
import {Text} from '../../../../ui/Text';

export const FirstPage = () => {
  const token = useSelector((state) => state.token.token);

  return (
    <>
      {token ? (
        <>
          <Text As="h2" center>
            Стартовая страница
          </Text>
          <Text As="p" center>
            Добро пожаловать
          </Text>
          <Text As="p" center>
            Выберите категорию
          </Text>
        </>
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
