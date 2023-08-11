import PropTypes from 'prop-types';

export const Svg = prop => {
    const {
        url,
    } = prop;

    return (
        <>
            <img src={url}/>
        </>
    );
};

Svg.propTypes = {
    url: PropTypes.string,
};
