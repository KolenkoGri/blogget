import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {PostsContextProvider} from './context/postsContext';

function App() {
    return (
        <TokenContextProvider>
            <AuthContextProvider>
                <Header/>
                <PostsContextProvider>
                    <Main/>
                </PostsContextProvider>
            </AuthContextProvider>
        </TokenContextProvider>
    );
}

export default App;

