import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import PropTypes from 'prop-types';
import {useToken} from './hooks/useToken';
import {useAuth} from './hooks/useAuth';
import {URL_API} from './api/const';

function App() {
    const [token, delToken] = useToken('');
    const [auth, setAuth] = useAuth(token, URL_API);

    return (
        <>
            <Header token={token} delToken={delToken}
                auth = {auth} setAuth = {setAuth}
            />
            <Main/>
        </>
    );
}

export default App;

App.propTypes = {
    token: PropTypes.string,
};
