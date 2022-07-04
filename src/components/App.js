import React, { useState } from "react";
import TeamModal from "./TeamModal";
import initialPlayers from "../data/players";
import Player from "./Player";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [players, setPlayers] = useState(initialPlayers);

  const onSelect = (playerId) => {
    const updatedPlayers = players.map(player => {
      if(player.id === playerId) {
        return {...player, isSelected : !player.isSelected}
      }
      return player;
    })
    setPlayers(updatedPlayers);
  }

  const selectAllPlayers = () => {
    const updatedPlayers = players.map(player => {
      return {...player, isSelected : true}
    })
    setPlayers(updatedPlayers);
  }

  const unSelectAllPlayers = () => {
    const updatedPlayers = players.map(player => {
      return {...player, isSelected : false}
    })
    setPlayers(updatedPlayers);
  }

  const selectPlayersCount = players.filter(x => x.isSelected).length;
  return (
    <div className="app">
      <header className="header">
        <div className="heading1">Squad</div>{" "}
        <div className="heading2">
          {" "}
          <span>Selected players: </span> <span>{selectPlayersCount}</span>
        </div>
        <div>
          {" "}
          <div className="button button--link">
            {" "}
            Select 10 random players{" "}
          </div>{" "}
          <div className="button button--link" onClick={selectAllPlayers}>Select all players</div>{" "}
          <div className="button button--link" onClick={unSelectAllPlayers}>Unselect all players</div>
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
        {players.map((player) => <Player player={player} onSelect={() => onSelect(player.id)} key={player.id}/>)}
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
