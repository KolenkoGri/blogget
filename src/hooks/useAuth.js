import {useState, useEffect} from 'react';

export const useAuth = (token, URL_API) => {
    const [auth, setAuth] = useState({});

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
            });
    }, [token]);

    return [auth, setAuth];
};
