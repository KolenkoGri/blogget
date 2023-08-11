import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {Text} from '../../../UI/Text';

import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {debounceRaf} from '../../../utils/debounce';

const LIST = [
    {value: 'Главная', Icon: HomeIcon},
    {value: 'Топ', Icon: TopIcon},
    {value: 'Лучшие', Icon: BestIcon},
    {value: 'Горячие', Icon: HotIcon},
].map(assignId);

// const [list, setList] = useState(LIST);

export const Tabs = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(true);
    const [isValue, setIsValue] = useState('Главная');

    const handleResize = () => {
        if (document.documentElement.clientWidth < 768) {
            setIsDropdown(true);
        } else {
            setIsDropdown(false);
        }
    };

    useEffect(() => {
        const debounceResize = debounceRaf(handleResize);
        debounceResize();
        window.addEventListener('resize', debounceResize);
        return () => {
            window.addEventListener('resize', debounceResize);
        };
    }, []);

    return (
        <div className={style.container}>
            {isDropdown && <div className={style.wrapperBtn}>
                <button className={style.btn}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {isValue} <ArrowIcon width={15} height={15}/>
                </button>
            </div>}

            {(isDropdownOpen || !isDropdown) &&
            <Text As='ul' className = {style.list}
                onClick={() => setIsDropdownOpen(false)}>
                {LIST.map(({value, id, Icon}) => (
                    <Text As='li' className={style.item} key={id}>
                        <Text As='button' className={style.btn}
                            onClick={() => {
                                setIsValue(value);
                            }}>{value}
                            {Icon && <Icon width = {30}
                                height = {30}/>}</Text>
                    </Text>
                ))}
            </Text>}
        </div>
    );
};

Tabs.propTypes = {
    list: PropTypes.array,
    setList: PropTypes.func,
    addItem: PropTypes.func,
};
