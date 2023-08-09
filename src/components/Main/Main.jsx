import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';

console.log(style);

export const Main = () => (
    <Layout>
        <Tabs/>
        <List/>
    </Layout>
);
