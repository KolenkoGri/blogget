import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Modal from '../Modal';
import {FirstPage} from './List/FirstPage/FirstPage';
import {ErrorPage} from './List/ErrorPage/ErrorPage';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

export const Main = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);
  return (
    <main className={style.main}>
      <Layout>
        <Tabs />
        <Routes>
          {token ?
          <>
            <Route path="/category/:page" element={<List />}>
              <Route path="post/:id" element={<Modal />} />
            </Route>
            <Route path={`/`} element={<FirstPage />}></Route>
            <Route path={`*`} element={<ErrorPage />}></Route>
          </> :
          <Route path={`*`} element={<FirstPage />}></Route>}
        </Routes>
      </Layout>
    </main>
  );
};
