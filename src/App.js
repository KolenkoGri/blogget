import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';
import {useDispatch} from 'react-redux';
import {Routes, Route} from 'react-router-dom';


function App() {
    const dispatch = useDispatch();
    dispatch(updateToken(getToken()));
    return (
        <Routes>
            <Route
                path='*'
                element = {
                    <>
                        <Header/>
                        <Main/>
                    </>
                }>
            </Route>
        </Routes>
    );
}

export default App;

