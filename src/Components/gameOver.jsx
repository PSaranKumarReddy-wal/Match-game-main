const GameOver = ({ score, playAgain }) => (
  <div className="game-over-container">
    <h1>YOUR SCORE</h1>
    <p>{score}</p>
    <button type="button" onClick={playAgain}>
      Play Again
    </button>
  </div>
);

export default GameOver;
