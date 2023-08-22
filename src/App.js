import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {PostsContextProvider} from './context/postsContext';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';
import {useDispatch} from 'react-redux';


function App() {
    const dispatch = useDispatch();
    dispatch(updateToken(getToken()));
    return (
        <PostsContextProvider>
            <Header/>
            <Main/>
        </PostsContextProvider>
    );
}

export default App;

