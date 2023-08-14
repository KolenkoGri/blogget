import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
    const {
        As = 'span',
        color = 'black',
        size,
        tsize,
        dsize,
        fontWeight = 'medium',
        className,
        children,
        href,
        center,
    } = prop;

    const classes = classNames(
        className,
        style[color],
        {[style[`fs${size}`]]: size},
        {[style[`fst${tsize}`]]: tsize},
        {[style[`fsd${dsize}`]]: dsize},
        style[fontWeight],
        {[style.center]: center}
    );

    return <As className={classes} href={href}>{children}</As>;
};

Text.propTypes = {
    As: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    tsize: PropTypes.number,
    dsize: PropTypes.number,
    fontWeight: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array,
        PropTypes.number,
    ]),
    href: PropTypes.string,
    center: PropTypes.bool,
};


