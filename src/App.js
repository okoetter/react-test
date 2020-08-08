import React, { useState } from 'react';
import './App.css';
import PlayerNamesModal from './PlayerNamesModal';

function App() {
  const [ShowPlayerNamesModal, setPlayerNamesModal] = useState(true);
  const ClosePlayerNamesModal = () => { setPlayerNamesModal(false); }

  return (
    <div className="App">
      {ShowPlayerNamesModal && <PlayerNamesModal handleClose={ ClosePlayerNamesModal } />}
    </div>
  );
}

export default App;
