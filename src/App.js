import React from 'react';
import logo from './logo.svg';
import './App.css';
import './NullStyle.css'
import SiteBar from './components/SiteBar/SiteBar'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Header />
        <SiteBar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
