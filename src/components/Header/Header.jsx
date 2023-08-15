import style from './Header.module.css';
import Layout from '../Layout';

import Auth from './Auth';
import Logo from './Logo';
import Search from './Search';
import Title from './Title';

export const Header = () => (
    <header className={style.header}>
        <Layout>
            <div className={style.gridContainer}>
                <Logo/>
                <Title text = "Главная"/>
                <Search/>
                <Auth/>
            </div>
        </Layout>
    </header>
);
