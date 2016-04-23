import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import AppBar from 'material-ui/lib/app-bar';
import {connect} from 'react-redux';

const login = (user) => ({type: 'LOGIN', user});

class AuthView extends React.Component {
  render() {
    const {user, dispatch} = this.props;
    return (
      <div className="auth">
        <AppBar title={user ? 'Hello ' + user : 'Twitter'}/>
        <TextField hintText="Username" ref="username"/>
        <RaisedButton
          onClick={() => {dispatch(login(this.refs.username.getValue()))}}
          label="Login"
          secondary={true}/>
      </div>)
  }
}

export default connect(({user}) => ({user}))(AuthView);
