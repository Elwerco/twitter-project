import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Auth from "./components/Auth";
import Add from "./components/Add"
import Sign from "./components/Sign";
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

const initialState = {
	data: []
};

localStorage.setItem('myKey', JSON.stringify(initialState.data));


function playlist(state = initialState.data, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);
const history = createBrowserHistory(); 

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <div>
          {/*<Nav />*/}
          {/*<App />*/}
          <Route exact path="/" component={Add}/>
          <Route path="/login" component={Auth}/>
          <Route path="/signup" component={Sign}/>
        </div>
      </Router>
  </Provider>,
  document.getElementById('root')
);

