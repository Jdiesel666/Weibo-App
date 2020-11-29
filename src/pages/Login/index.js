import React, { useEffect } from 'react';
import quertString from 'query-string';
import { useDispatch } from 'redux-react-hook';
import { getAccess } from 'actions/account';

const Login = () => {
  const dispatch = useDispatch();
  const { query: { code }} = quertString.parseUrl(window.location.href);
  useEffect(() => {
    if (code) {
      dispatch(getAccess({ code }))
    }
  }, [code, dispatch]);
  return <div>{code}</div>
}

export default Login;