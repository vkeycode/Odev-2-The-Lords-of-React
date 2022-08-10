import { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [box, setBox] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const tictoctoe = (index) => {
    if (box[index] === 0) {
      box[index] = 1;
    } else if (box[index] === 1) {
      box[index] = 2;
    } else {
      box[index] = 0;
    }
    setBox([...box]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="text">GAME TIME</div>
        <div className="group">
          {box.map((item, index) => {
            return (
              <div
                className={
                  "rectangle " +
                  (item === 0
                    ? ""
                    : item === 1
                    ? "text-x "
                    : item === 2
                    ? "text-o "
                    : "")
                }
                onClick={() => tictoctoe(index)}
              >
                {item === 0 ? "" : item === 1 ? "X" : item === 2 ? "o" : ""}
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
