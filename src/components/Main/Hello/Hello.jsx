import {useSelector} from 'react-redux';
import style from './Hello.module.css';
import {Text} from '../../../UI/Text';
export const Hello = () => {
    const token = useSelector((state) => state.token.token);

    return (token ?
        <div className={style.hello}>
            <h2>Стартовая страница</h2>
            <h3>Добро пожаловать!</h3>
            <h4>Выберите категорию</h4>
        </div> :
        <>
            <Text As="h2" center color="orange">
            Авторизуйтесь
            </Text>
        </>
    )
    ;
};
