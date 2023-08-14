import style from './Header.module.css';
import Layout from '../Layout';

import Auth from './Auth';
import Logo from './Logo';
import Search from './Search';
import Title from './Title';
import PropTypes from 'prop-types';

export const Header = ({token, delToken, auth, setAuth}) => (
    <header className={style.header}>
        <Layout>
            <div className={style.gridContainer}>
                <Logo/>
                <Title text = "Главная"/>
                <Search/>
                <Auth token = {token} delToken = {delToken}
                    auth = {auth} setAuth = {setAuth}
                />
            </div>
        </Layout>
    </header>
);

Header.propTypes = {
    auth: PropTypes.object,
    setAuth: PropTypes.func,
    token: PropTypes.string,
    delToken: PropTypes.func,
};
