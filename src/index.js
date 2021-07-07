import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './Redux/store';
import 'font-awesome/css/font-awesome.min.css';

export let rerender = (state) => {
   ReactDOM.render(
      <App state={state} dispatch={store.dispatch.bind(store)} />,
      document.getElementById('root')
   );
} 

rerender(store.getState());
store.subscride(rerender);
serviceWorker.unregister();
