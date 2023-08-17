export const setToken = (token) => {
    localStorage.setItem('bearer', token);
};

export const getToken = () => {
    const token = '';
    if (location.pathname.includes('/auth')) {
        const token = new URLSearchParams(location.hash.substring(1))
            .get('access_token');
        setToken(token);
    }
    if (localStorage.getItem('bearer')) {
        setToken(localStorage.getItem('bearer'));
    }
    return token;
};
// import {useState, useEffect} from 'react';

// export const useToken = (state) => {
//     const [token, setToken] = useState(state);

//     const delToken = () => {
//         if (localStorage.getItem('bearer')) {
//             localStorage.removeItem('bearer');
//         }
//     };

//     return [token, delToken];
// };
