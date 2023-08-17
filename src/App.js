import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {PostsContextProvider} from './context/postsContext';
import {store} from './store';

function App() {
    return (
        <Provider store={store}>
            <TokenContextProvider>
                <AuthContextProvider>
                    <Header/>
                    <PostsContextProvider>
                        <Main/>
                    </PostsContextProvider>
                </AuthContextProvider>
            </TokenContextProvider>
        </Provider>
    );
}

export default App;

