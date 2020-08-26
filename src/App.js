import React, { useState } from 'react';
import './App.css';
import TeamNamesModal from './TeamNamesModal';

function App() {
  const [showTeamNamesModal, setShowTeamNamesModal] = useState(true);
  const closeTeamNamesModal = () => { setShowTeamNamesModal(false); }

  return (
    <div className="App">
      {showTeamNamesModal && <TeamNamesModal handleClose={ closeTeamNamesModal } />}
    </div>
  );
}

export default App;
