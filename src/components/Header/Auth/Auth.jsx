import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState, useContext} from 'react';
import {authContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../../../store';


export const Auth = () => {
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();

    const delToken = () => {
        dispatch(deleteToken(token));
    };

    const [login, setLogin] = useState(false);
    const {auth, clearAuth} = useContext(authContext);

    const logout = () => {
        setLogin(!login);
    };

    const exitLogin = () => {
        delToken();
        clearAuth();
        location.href = location.origin;
    };

    return (
        <div className={style.container}>
            { auth.name ?
            <>
                <button className = {style.btn} onClick={() => {
                    logout();
                }}>
                    <img className={style.img} src = {auth.img}
                        title = {auth.name} alt={'Аватар'} />
                </button>
                {login && <button
                    className={style.logout} onClick = {() => {
                        exitLogin();
                    }
                    }>
                    Выйти</button>}
            </> :
            <Text className={style.authLink} As='a' href={urlAuth}>
                <LoginIcon className={style.svg} width={50} height={50}/>
            </Text>}
        </div>
    );
};

