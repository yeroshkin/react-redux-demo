import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';

const addTwitComment = (text, twitId, user)=> ({type: 'ADD_TWIT_COMMENT', twitId, text, user});

let NewComment = ({twitId, user, dispatch})=> {
  let input;
  return (<div style={{display: !user ? 'none' : 'block'}}>
    <input ref={node => input = node}/>
    <RaisedButton
      onClick={() => {dispatch(addTwitComment(input.value, twitId, user));input.value = '';}}
      label="Add new comment"/>
  </div>);
};

export default connect(({user}) => ({user}))(NewComment);
