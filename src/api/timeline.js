import ajax from '../utils/ajax';
// import { ACCESS_TOKEN } from '../constants';

export function getHomeTimeline(params) {
  return ajax.get("/proxy/2/statuses/home_timeline.json", { params });

  // params: { access_token: ACCESS_TOKEN }
  // https://mock.don.red/weibo/2/statuses/public_timeline.json
}