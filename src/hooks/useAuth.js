import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store';

export const useAuth = () => {
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();

    const [auth, setAuth] = useState({});

    const delToken = () => {
        dispatch(deleteToken(token));
    };

    useEffect(() => {
        if (!token) return;
        fetch(`${URL_API}/api/v1/me`, {
            headers: {
                Authorization: `bearer ${token}`,
            },
        }).then(response => response.json()).
            then(({name, icon_img: iconImg}) => {
                const img = iconImg.replace(/\?.*$/, '');
                setAuth({name, img});
            })
            .catch((err) => {
                console.log(err);
                setAuth({});
                delToken();
            });
    }, [token]);

    const clearAuth = () => setAuth({});

    return [auth, clearAuth];
};
