import style from './Title.module.css';
import Layout from '../../Layout';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';

export const Title = (props) => (
    <Layout>
        <Text As='h1' size={22} tsize={26} center
            className={style.heading}>{props.text}</Text>
    </Layout>
);

Title.propTypes = {
    text: PropTypes.string,
};

