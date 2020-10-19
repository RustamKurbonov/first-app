import React from 'react';
import logo from './logo.svg';
import './App.css';
import './NullStyle.css';
import SiteBar from './components/SiteBar/SiteBar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Message from './components/Message/Message';
import News from './components/News/News'
import Communities from './components/Communities/Communities'
import Friends from './components/Friends/Friends'
import Music from './components/Music/Music'
import Video from './components/Video/Video'
import Photos from './components/Photos/Photos'
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='container'>
          <Header />
          <SiteBar />
          <div className='sectionContent'>
            <Route path='/profile' component={Profile} />
            <Route path='/news' component={News} />
            <Route path='/message' component={Message} />
            <Route path='/communities' component={Communities} />
            <Route path='/friends' component={Friends} />
            <Route path='/music' component={Music} />
            <Route path='/video' component={Video} />
            <Route path='/photos' component={Photos} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
