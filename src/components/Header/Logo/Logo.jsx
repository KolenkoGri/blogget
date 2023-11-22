import {useNavigate} from 'react-router-dom';
import style from './Logo.module.css';
import logo from './img/logo.svg';

// import {ReactComponent as LogoIcon} from './img/logo.svg';

export const Logo = () => {
  const navigate = useNavigate();
  const backToMain = () => {
    navigate('/');
  };

  return (
    <a className={style.link} onClick={backToMain}>
      <img className={style.logo} src={logo} alt="Логотип Blogget" />
    </a>
  );
};
