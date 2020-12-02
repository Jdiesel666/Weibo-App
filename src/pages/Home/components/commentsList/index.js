import React, { useEffect, useCallback } from 'react';
import { List, Avatar, Card, Button } from 'antd';
import { useDispatch, useMappedState } from 'redux-react-hook';
import moment from 'moment';
import { getComments } from 'actions/comments';
import { COMMENT_PAGESIZE } from 'constants/index';
import styles from './index.module.scss';

const mapStateComments = state => state.comments;

const CommentsList = ({ id }) => {
  const dispatch = useDispatch();
  const { comments = [], page = 0, total } = useMappedState(mapStateComments);

  const handleInfiniteOnLoad = useCallback(() => {
    dispatch(getComments({ id, page: page + 1, count: COMMENT_PAGESIZE }));
  }, [dispatch, id, page]);

  useEffect(() => {
    handleInfiniteOnLoad();
  }, []);

  const loadMore = page * COMMENT_PAGESIZE < total && (
    <div className={styles.loadMore} >
      <Button onClick={handleInfiniteOnLoad}>加载更多</Button>
    </div>
  );

  return (
    <Card>
      <List
        className={styles.commentsList}
        loadMore={loadMore}
        dataSource={comments}
        renderItem={({ user = {}, id, text, created_at }) => (
          <List.Item key={id}>
            <List.Item.Meta
              avatar={
                <Avatar src={user.avatar_hd} />
              }
              title={
                <div>
                  <span>{user.name}</span>
                  <span className={styles.extra}>
                    {moment(created_at).fromNow()}
                  </span>
                </div>
              }
              description={text}
            />
          </List.Item>
        )}
      >
      </List>
    </Card>
  )
}

export default CommentsList;