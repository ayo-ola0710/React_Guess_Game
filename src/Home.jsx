import { useState } from "react";
import Button from "./components/Button";
import Mesage from "./components/Mesage";
import GameStat from "./components/GameStat";

const Home = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [randomGuess, setRandomGuess] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [userMessage, setUserMessage] = useState("Start Guessing........");
  const [tries, setTries] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const maxTries = 5;

  function gameBegin() {
    const guess = Math.floor(Math.random() * 100) + 1;
    setRandomGuess(guess);
    setIsGameStarted(true);
    setTries(0);
    setUserInput("");
    setGameOver(false);
  }

  function checkGuess() {
    if (gameOver) return;

    const guess = Number(userInput);

    if (isNaN(guess)) {
      setUserMessage("⚠️ Please enter a number ");
      return;
    }

    const remainingTry = tries + 1;
    setTries(remainingTry);

    if (guess === randomGuess) {
      setUserMessage("🎉 YOU WON!");
      setGameOver(true);
    } else if (remainingTry >= maxTries) {
      setGameOver(true);
    } else if (guess < randomGuess) {
      setUserMessage("Too Low! Try Again.");
    } else {
      setUserMessage("Too High! Try Again.");
    }

    setUserInput("");
  }

  return (
    <div className="bg-[#222222] text-white font-serif pt-7 pl-8 pb-[580px]">
      <Button title="Start!" onClick={gameBegin} />

      {isGameStarted && (
        <div className="text-center pt-6">
          <h1 className="text-6xl">🎲 Guess My Number!</h1>
          <GameStat title={gameOver ? "GAME OVER" : "GAME STATED"} />

          <div className="font-bold mx-[20px] my-auto w-[80px] h-[80px] bg-white text-[#222222]  text-4xl flex justify-center items-center rounded-2xl ml-[630px] ">
            {gameOver ? `${randomGuess}` : "?"}
          </div>

          <p className="text-2xl pt-5 pb-5">
            🔢 Enter a number between 1 - 100:
          </p>

          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-[100px] font-semibold outline-none h-[50px] border-1 border-white rounded-lg text-2xl pl-2 mb-4 "
            disabled={gameOver}
          />
          <br />

          <Button title="Check!" onClick={checkGuess} disabled={gameOver} />

          <Mesage title={userMessage} />

          <div className="mt-4 pb-10">
            <p>
              ❤️ Tries:
              <span className="text-4xl">
                {tries} / {maxTries}
              </span>
            </p>
          </div>

          <Button
            title="Again!"
            onClick={() => {
              location.reload();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
