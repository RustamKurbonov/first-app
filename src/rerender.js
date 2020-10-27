import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, changeStateTextPost} from './Redux/state';

export let rerender = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App state={state} addPost={addPost} changeStateTextPost={changeStateTextPost}/>
      </React.StrictMode>,
      document.getElementById('root')
   );
} 