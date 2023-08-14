import React from 'react';
import {useAuth} from '../hooks/useAuth';
import PropTypes from 'prop-types';

export const authContext = React.createContext({});


export const AuthContextProvider = ({children}) => {
    const [auth] = useAuth();

    return (
        <AuthContextProvider value = {{auth}}>
            {children}
        </AuthContextProvider>
    );
};


AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
