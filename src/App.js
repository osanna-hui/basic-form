import React from 'react';
import './App.css';
import BasicForm from './components/BasicForm.js';
import './components/icons.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic Form with Validation!</h1>
      </header>
      <BasicForm />
    </div>
  );
}

export default App;
