import style from './Search.module.css';
import {ReactComponent as SearchImg} from './img/search.svg';

export const Search = () => (
    <form className={style.form}>
        <input className={style.search} type='search'/>
        <button className={style.button}>
            <SearchImg width={30} height={30}/>
        </button>
    </form>
);
