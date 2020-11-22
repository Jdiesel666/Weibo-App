import React, { useEffect } from 'react';
import ajax from '../../utils/ajax';

const Home = () => {
  useEffect(() => {
    ajax.get("http://mock.don.red/weibo/2/statuses/public_timeline.json", { params: { access_token: 'token' }})
  }, []);

  return (
    <div>
      Home
    </div>
  );
};

export default Home;