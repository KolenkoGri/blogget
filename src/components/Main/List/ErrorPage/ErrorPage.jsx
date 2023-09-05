import style from './ErrorPage.module.css';
import {useSelector} from 'react-redux';

export const ErrorPage = () => {
  const token = useSelector((state) => state.token.token);
  const tokenType = `&token_type=bearer&state=random_string&expires_in=86400`;
  const scope = `&scope=read+submit+identity`;
  const accessToken = `#access_token=`;
  const firstPage = `auth${accessToken}${token}${tokenType}${scope}`;
  const test = window.location.href;
  const testR = test.replace('https://blogget-iota.vercel.app/', '');
  console.log(firstPage === testR);
  return (
    <>
      {firstPage === testR ? (
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
            404
          </h2>
        </div>
      )}
    </>
  );
};
