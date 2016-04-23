import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login'
import Twits from './components/twit/twits'
import {Provider} from 'react-redux'
import store from './store';

const TwitterApp = () =>(<div>
  <Login/>
  <h2>Twits</h2>
  <Twits/>
</div>);

ReactDOM.render(
  <Provider store={store}>
    <TwitterApp/>
  </Provider>,
  document.getElementById('root')
);
