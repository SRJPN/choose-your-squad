const Player = ({player}) => (
  <div key={player.id} className="player" data-id={player.id}>
    <div className="player__details">
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

export default Player;