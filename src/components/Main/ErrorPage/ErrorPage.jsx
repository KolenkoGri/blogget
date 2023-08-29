import style from './ErrorPage.module.css';

export const ErrorPage = () => {
    console.log(style);
    return <div className={style.error}>
      404
    </div>;
};
