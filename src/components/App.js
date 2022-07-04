import React, { useState } from "react";
import TeamModal from "./TeamModal";
import players from "../data/players";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="app">
      <header className="header">
        /* PLACEHOLDER: Replace me with the code found in the setup step of the
        document given to you by your interviewer */
      </header>

      <div className="player-list">
        {players.map((player) => {
          return (
            <div key={player.id} className="player" data-id={player.id}>
              <div>
                <img
                  src={`https://avatars.dicebear.com/api/avataaars/${player.id}.svg?w=100`}
                />
                <div>{player.name}</div>
              </div>
              <div className="player__selection">
                <input id={player.id} type="checkbox" />
                <div>select</div>
              </div>
            </div>
          );
        })}
      </div>

      <TeamModal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        teamA={[]}
        teamB={[]}
      />
    </div>
  );
};

export default App;
