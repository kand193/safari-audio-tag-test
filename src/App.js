import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { AudioPlayer } from './components/AudioPlayer';

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
        <button onClick={() => handlePlayerAdd(true)}>
          오디오 태그 생성(즉시 재생)
        </button>
        <button onClick={() => handlePlayerAdd(false)}>
          오디오 태그 생성
        </button>
        <br />
        {players.map((player, index) => (
          <AudioPlayer key={index} {...player} />
        ))}
      </header>
    </div>
  );
}

export default App;
