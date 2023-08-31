import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {authRequestAsync} from '../store/auth/action';

export const useAuth = () => {
  const auth = useSelector((state) => state.auth.data);
  const token = useSelector((state) => state.token.token);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  return [auth, loading];
};
