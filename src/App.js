import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import PropTypes from 'prop-types';
import {useToken} from './hooks/useToken';
// import {useAuth} from './hooks/useAuth';

function App() {
    const [token, delToken] = useToken('');
    // const [auth, setAuth] = useAuth({});

    return (
        <>
            <Header token={token} delToken={delToken}/>
            <Main/>
        </>
    );
}

export default App;

App.propTypes = {
    token: PropTypes.string,
};
