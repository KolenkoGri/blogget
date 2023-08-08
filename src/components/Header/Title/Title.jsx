import style from './Title.module.css';
import Layout from '../../Layout';
import PropTypes from 'prop-types';

export const Title = (props) => (
    <Layout>
        <h1 className={style.heading}>{props.text}</h1>
    </Layout>
);

Title.propTypes = {
    text: PropTypes.string,
};

