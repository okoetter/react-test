import React, { useState } from 'react';
import './App.css';
import TeamNamesModal from './TeamNamesModal';

function App() {
  const [showTeamNamesModal, setShowTeamNamesModal] = useState(true);
  const openTeamNamesModal = () => { setShowTeamNamesModal(true); };
  const closeTeamNamesModal = () => { setShowTeamNamesModal(false); };

  return (
    <div className="App">
      <button onClick={openTeamNamesModal}>Change Teamnames</button>
      {showTeamNamesModal && <TeamNamesModal handleClose={closeTeamNamesModal} />}
    </div>
  );
}

export default App;
