import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState} from 'react';

export const Auth = ({delToken, auth, setAuth}) => {
    const [login, setLogin] = useState(false);

    const logout = () => {
        setLogin(!login);
    };

    const exitLogin = () => {
        delToken();
        setAuth({});
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

Auth.propTypes = {
    auth: PropTypes.object,
    setAuth: PropTypes.func,
    token: PropTypes.string,
    delToken: PropTypes.func,
};
