import React from 'react';
import NewComment from './new-comment';

const Comment = ({user, text}) =>(
  <li>
    {text} @<i>{user}</i>
  </li>
);

export default ({comments, twitId}) =>(
  <ul style={{marginLeft: '100px'}}>
    {comments.map((comment, i) =>
      <Comment key={i} {...comment}/>
    )}
    <hr/>
    <NewComment twitId={twitId}/>
  </ul>
);
