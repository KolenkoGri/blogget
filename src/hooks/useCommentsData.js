import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (id) => {
    const {token} = useContext(tokenContext);
    const [comments, setComments] = useState('');
    useEffect(() => {
        fetch(`${URL_API}/comments/${id}`, {
            headers: {
                Authorization: `bearer ${token}`,
            },
        }).then(response => response.json()).
            then((data) => {
                setComments(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    return [comments];
};
