import './App.css';
import React, { useState } from 'react';
import { VideosController } from './components/VideosController';

function App() {
  const [players, setPlayers] = useState([]);

  const handlePlayerAdd = (autoPlay) => {
    setPlayers(prev => ([
      ...players,
      {
        autoPlay,
        src: './sample_audio_mp3.mp3',
      }
    ]));
  }

  return (
    <div className="App">
      <header className="App-header">
        <canvas width="300" height="300" style={{ border: '1px solid white' }} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <VideosController />
      </header>
    </div>
  );
}

export default App;
