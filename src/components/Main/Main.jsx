import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Routes, Route} from 'react-router-dom';
import {Modal} from '../Modal/Modal';
import Hello from './Hello';
import ErrorPage from './ErrorPage';

export const Main = () => (
    <Layout>
        <Tabs/>
        <Routes>
            <Route path='/category/:page' element={<List/>}>
                <Route path='post/:id' element={<Modal/>}/>
            </Route>
            <Route path={`*`} element={<ErrorPage/>}></Route>
            <Route path={'/:auth'} element={<Hello/>}></Route>
        </Routes>
    </Layout>
);
