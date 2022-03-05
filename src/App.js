import React from 'react';
import './App.css';




const App = () => {
  return (
    <div className='wrapper' >

      <div className='header' >
        <div>
          <img src='https://avatars.mds.yandex.net/i?id=3aee408c4bde0b7d02cef516bfbc3c24-5850174-images-thumbs&n=13'></img>
        </div>
      </div>
      <nav className='nav'>
        <div>
          <a href='#'>Profile</a>
        </div>
        <div>
          <a href='#'>Message</a>
        </div>
        <div>
          <a href='#'>News</a>
        </div>
        <div>
          <a href='#'>Settings</a>
        </div>

      </nav>

      <div className='content'>
        <div>
          <img src='https://avatars.mds.yandex.net/i?id=d582b5cb5707ecd29f9dd6bb710cf4cf-5878684-images-thumbs&n=13'></img>
        </div>
        <div>
          ava-description
        </div>
        <div>
        My-Post
        <div>
          New post
        </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>

  );
}


export default App;










