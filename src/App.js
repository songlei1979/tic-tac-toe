import logo from './logo.svg';
import './App.css';
import Board from "./components/Board";
import Info from "./components/Info";
import {useState} from "react";

function App() {
  const [reset, setReset] = useState(false);

    // Creating a winner state, which indicates
    // the current winner
    const [winner, setWinner] = useState("");

    // Sets the reset property to true
    // which starts the chain
    // reaction of resetting the board
    const resetBoard = () => {
        setReset(true);
    };

    return (
        <div className="App">
            {/* Shrinks the popup when there is no winner */}
            <div
                className={`winner ${
                    winner !== "" ? "" : "shrink"
                }`}
            >
                {/* Display the current winner */}
                <div className="winner-text">{winner}</div>
                {/* Button used to reset the board */}
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
            {/* Custom made board component comprising of
            the tic-tac-toe board  */}
            <Board
                reset={reset}
                setReset={setReset}
                winner={winner}
                setWinner={setWinner}
            />
            <Info />
        </div>
    );
}

export default App;
