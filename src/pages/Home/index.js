import React, { useEffect } from 'react';
import ajax from 'utils/ajax';
import { ACCESS_TOKEN } from '../../constants';

const Home = () => {
  useEffect(() => {
    ajax.get("https://mock.don.red/weibo/2/statuses/public_timeline.json", { params: { access_token: ACCESS_TOKEN } })
  }, []);

  return (
    <div>
      Home
    </div>
  );
};

export default Home;
