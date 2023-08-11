import style from './Rate.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Rate = ({ups}) => <div className={style.raiting}>
    <Text As='button'
        className = {style.up} aria-label='Повысить рейтинг'/>
    <Text As='p' size={12} tsize={16} dsize={120} color='grey'
        className={style.ups}>{ups}</Text>
    <Text As='button'
        className = {style.down} aria-label='Понизить рейтинг'/>
</div>;


Rate.propTypes = {
    ups: PropTypes.number,
};
