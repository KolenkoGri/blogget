import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useBestPosts = () => {
    const token = useSelector(state => state.token);
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
