import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useBestPosts = () => {
    const {token} = useContext(tokenContext);
    const [bestPosts, setBestPosts] = useState([]);
    useEffect(() => {
        token && fetch(`${URL_API}/best`, {
            headers: {
                Authorization: `bearer ${token}`,
            },
        }).then(response => response.json()).
            then(({data}) => {
                setBestPosts(data.children);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);
    return [bestPosts];
};
