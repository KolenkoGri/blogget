import style from './Rate.module.css';
import PropTypes from 'prop-types';

export const Rate = ({ups}) => <div className={style.raiting}>
    <button className = {style.up} aria-label='Повысить рейтинг'/>
    <p className={style.ups}>{ups}</p>
    <button className = {style.down} aria-label='Понизить рейтинг'/>
</div>;


Rate.propTypes = {
    ups: PropTypes.number,
};
