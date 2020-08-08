import React, { useState } from 'react';
import './App.css';
import InputPlayerNames from './InputPlayerNames';

function App() {
  const [ShowInputPlayerNames, setShowInputPlayerNames] = useState(true);
  const CloseInputPlayerNames = () => { setShowInputPlayerNames(false); }

  return (
    <div className="App">
      {ShowInputPlayerNames && <InputPlayerNames handleClose={ CloseInputPlayerNames } />}
    </div>
  );
}

export default App;
