import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
import {store} from './store';

function App() {
    return (
        <Provider store={store}>
            <AuthContextProvider>
                <Header/>
                <PostsContextProvider>
                    <Main/>
                </PostsContextProvider>
            </AuthContextProvider>
        </Provider>
    );
}

export default App;

