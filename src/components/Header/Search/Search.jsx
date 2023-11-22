import style from './Search.module.css';
import {ReactComponent as SearchIcon} from './img/search.svg';

export const Search = () => {
  const searchFunc = (e) => {
    e.preventDefault();
  };
  return (
    <form className={style.form} onSubmit={searchFunc}>
      <input className={style.search} type="search" />
      <button className={style.button}>
        <SearchIcon className={style.svg}></SearchIcon>
      </button>
    </form>
  );
};
