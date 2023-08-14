import React from 'react';
import PropTypes from 'prop-types';
import {useToken} from '../hooks/useToken';

export const tokenContext = React.createContext({});

export const TokenContextProvider = ({children}) => {
    const [token] = useToken();

    // const delToken = () => {
    //     if (localStorage.getItem('bearer')) {
    //         localStorage.removeItem('bearer');
    //     }
    // };

    return (
        <TokenContextProvider value = {{token}}>
            {children}
        </TokenContextProvider>
    );
};


TokenContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
