import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './Redux/store';

export let rerender = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App state={state} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
   );
} 

rerender(store.getState());
store.subscride(rerender);
serviceWorker.unregister();
