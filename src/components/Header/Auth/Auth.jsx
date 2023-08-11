import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';


export const Auth = ({auth}) => (
    <button className={style.button}>
        { auth ? auth : <LoginIcon width={50} height={50}/> }
    </button>
);

Auth.propTypes = {
    auth: PropTypes.string,
};
