const Player = ({player, onSelect}) => (
  <div className="player" data-id={player.id}>
    <div className="player__details">
      <img
        src={`https://avatars.dicebear.com/api/avataaars/${player.id}.svg?w=100`}
        alt={player.name}
      />
      <div>{player.name}</div>
    </div>
    <div className="player__selection">
      <input id={player.id} type="checkbox" onClick={onSelect} checked={player.isSelected} />
      <div>select</div>
    </div>
  </div>
);

export default Player;