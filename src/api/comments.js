import ajax from '../utils/ajax';

export function createComment(params) {
  return ajax.post('/proxy/2/comments/create.json', {
    data: params,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
  });
}