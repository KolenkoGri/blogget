import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useCommentsData = (id) => {
    const token = useSelector(state => state.token.token);

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
