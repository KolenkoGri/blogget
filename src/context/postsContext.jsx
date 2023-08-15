import React from 'react';
import {useBestPosts} from '../hooks/useBestPosts';
import PropTypes from 'prop-types';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
    const [posts] = useBestPosts();
    return (
        posts && <postsContext.Provider value={posts}>
            {children}
        </postsContext.Provider>
    );
};

PostsContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
