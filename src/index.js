import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
///
let posts = [
  { name: 'Alexey', message: 'Это я' },
  { name: 'Andrey', message: 'Привет, это второй пост' },
  { name: 'Dima', message: 'Еще один пост' }
];
let descripcion = [
  { name: 'Rustam Kurbonov', data: '25.03.1996', sity: 'Nizhniy Novgorod '}
]
///
let users = [
  { name: 'Alexey', id: 1 },
  { name: 'Dima', id: 2 },
  { name: 'Ric', id: 3 }
];
let messangs = [
  { name: 'Alexey', messange: 'Hi' },
  { name: 'Me', messange: 'Hi!' },
  { name: 'Alexey', messange: 'nkjn wenfjnlnf nvj nwoefnlnf' }
];
///

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} users={users} messangs={messangs} descripcion={descripcion}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
