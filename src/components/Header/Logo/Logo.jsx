import style from './Logo.module.css';
import {ReactComponent as LogoImg} from './img/logo2.svg';


export const Logo = () => (<a className={style.link} href='/'>
    <LogoImg width={50} height={50} className={style.logo}
        alt= "Логотип Blogget"/>
</a>);
