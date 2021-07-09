import React from 'react';
import './App.css';
import './NullStyle.css';
import SiteBarContainer from './components/SiteBar/SiteBarContainer';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessageContainer from './components/Message/MessageContainer';
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
          <SiteBarContainer store={props.store} />
          <div className='sectionContent'>
            <Route path='/profile' render={() => <ProfileContainer store={props.store} />}/>
            <Route path='/news' render={() => <News />}/>
            <Route path='/message' render={() => <MessageContainer store={props.store} />}/>
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
