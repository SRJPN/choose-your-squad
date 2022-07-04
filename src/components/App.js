import React, { useState } from "react";
import TeamModal from "./TeamModal";
import players from "../data/players";
import Player from "./Player";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <div className="heading1">Squad</div>{" "}
        <div className="heading2">
          {" "}
          <span>Selected players: </span> <span>0</span>
        </div>
        <div>
          {" "}
          <div className="button button--link">
            {" "}
            Select 10 random players{" "}
          </div>{" "}
          <div className="button button--link">Select all players</div>{" "}
          <div className="button button--link">Unselect all players</div>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="button button--primary"
        >
          {" "}
          Generate teams
        </button>
      </header>

      <div className="player-list">
        {players.map((player, index) => <Player player={player} key={index}/>)}
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
