import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState, useContext} from 'react';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
    const {delToken} = useContext(tokenContext);
    const [login, setLogin] = useState(false);
    const {auth, clearAuth} = useContext(authContext);

    const logout = () => {
        setLogin(!login);
    };

    const exitLogin = () => {
        delToken();
        clearAuth();
        // location.href = location.origin;
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

