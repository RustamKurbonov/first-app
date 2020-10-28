import React from 'react';
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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='container'>
          <Header />
          <SiteBar state={props.state} />
          <div className='sectionContent'>
            <Route path='/profile' render={() => <Profile state={props.state} dispatch={props.dispatch} />}/>
            <Route path='/news' render={() => <News />}/>
            <Route path='/message' render={() => <Message state={props.state} dispatch={props.dispatch} />}/>
            <Route path='/communities' render={() => <Communities />} />
            <Route path='/friends' render={() => <Friends />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/video' render={() => <Video />} />
            <Route path='/photos' render={() => <Photos />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
