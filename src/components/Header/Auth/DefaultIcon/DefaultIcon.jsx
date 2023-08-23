import {createPortal} from 'react-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export const DefaultIcon = () => {
    console.log();
    return createPortal(
        <>
            <h3>Пользователь не авторизован</h3>
            <ReactNotification/></>
    ), document.querySelector('.notify');
};
