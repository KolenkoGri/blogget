import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';
// import {useAuth} from '../../../hooks/useAuth';


export const Auth = ({token, delToken}) => {
    const [auth, setAuth] = useState({});
    const [login, setLogin] = useState(false);
    // useAuth (token, URL_API);
    useEffect(() => {
        if (!token) return;
        fetch(`${URL_API}/api/v1/me`, {
            headers: {
                Authorization: `bearer ${token}`,
            },
        }).then(response => response.json()).
            then(({name, icon_img: iconImg}) => {
                const img = iconImg.replace(/\?.*$/, '');
                setAuth({name, img});
            })
            .catch((err) => {
                console.log(err);
                setAuth({});
            });
    }, [token]);

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
    token: PropTypes.string,
    delToken: PropTypes.func,
};
