import React, { useState } from 'react';
import './App.css';
import TeamNamesModal from './TeamNamesModal';

function App() {
  const [showTeamNamesModal, setShowTeamNamesModal] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowTeamNamesModal(true)}>Change Teamnames</button>
      {showTeamNamesModal && <TeamNamesModal handleClose={() => setShowTeamNamesModal(false)} />}
    </div>
  );
}

export default App;
