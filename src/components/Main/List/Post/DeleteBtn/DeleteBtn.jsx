import style from './DeleteBtn.module.css';
import deleteImg from './img/delete.svg';

export const DeleteBtn = () => <button className={style.delete}>
    <img src={deleteImg}/>
</button>;
