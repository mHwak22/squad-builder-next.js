interface Player {
  name: string;
  position: { x: number; y: number };
}

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: player.position.x,
        top: player.position.y,
        marginLeft: "20rem",
      }}
    >
      <p>{player.name}</p>
      {/* Additional player card info */}
    </div>
  );
};

export default PlayerCard;
