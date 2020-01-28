import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>NODE_ENV: {process.env.NODE_ENV}</p>
        <p>TEST_VAR: {process.env.REACT_APP_TEST_VAR}</p>
        <p>WEBSITE: {process.env.REACT_APP_WEBSITE}</p>
        <p>FILE_NAME: {process.env.REACT_APP_FILE_NAME}</p>
      </header>
    </div>
  );
}

export default App;
