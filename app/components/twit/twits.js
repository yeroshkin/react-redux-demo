import React from 'react';
import NewTwit from './new-twit';
import Comments from '../comment/comments';
import {connect} from 'react-redux';

const Twit = ({id, user, text, comments}) =>(
  <li>
    <p>{text} @<i>{user}</i></p>
    <Comments comments={comments} twitId={id}/>
  </li>
);

let Twits = ({twits}) => (
  <div>
    <NewTwit/>
    <hr/>
    {twits.map((twit, i) =>
      <Twit key={i} {...twit}/>
    )}
  </div>
);

export default connect(({twits}) => ({twits}))(Twits);
