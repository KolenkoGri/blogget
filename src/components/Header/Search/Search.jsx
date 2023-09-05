import {useDispatch} from 'react-redux';
import style from './Search.module.css';
import {ReactComponent as SearchIcon} from './img/search.svg';

export const Search = () => {
  const dispatch = useDispatch();
  dispatch({type: 'SUBMIT'});
  return (
    <form className={style.form}>
      <input className={style.search} type="search" />
      <button className={style.button}>
        <SearchIcon className={style.svg}></SearchIcon>
      </button>
    </form>
  );
};
