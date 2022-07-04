import React from "react";
import classNames from "classnames";

const TeamModal = ({ isOpen, closeModal, teamA, teamB }) => {
  return (
    <div className={classNames({ "is-modal-open": isOpen })}>
      <div className="modal">
        <button
          onClick={closeModal}
          className="modal__close button button--light"
        >
          ❌
        </button>
        <div>
          <div>
            <div>
              <b>Team A</b>
            </div>
            <div className="team">
              {teamA.map((player) => (
                <div key={player.id} className="team-player">
                  {player.name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <b>Team B</b>
            </div>
            <div className="team">
              {teamB.map((player) => (
                <div key={player.id} className="team-player">
                  {player.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div onClick={closeModal} className="overlay"></div>
    </div>
  );
};

export default TeamModal;
