import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';

const addTwit = (text, nextTwitId, user) => ({type: 'ADD_TWIT', nextTwitId, text, user});

let NewTwit = ({dispatch, user, nextTwitId}) => {
  let input;
  return (<div style={{display: !user ? 'none' : 'block'}}>
    <input ref={node => input = node}/>
    <RaisedButton
      onClick={() => {dispatch(addTwit(input.value, nextTwitId, user));input.value = '';}}
      label="Add new twit"/>
  </div>);
};

export default connect(({user, twits}) => ({user, nextTwitId: twits.length}))(NewTwit);
