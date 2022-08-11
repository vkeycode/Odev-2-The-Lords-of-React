import { useEffect, useState } from "react";
import "../App.css";

const check = [
  [0,1,2], 
  [3,4,5], 
  [6,7,8], 
  [0,3,6], 
  [1,4,7], 
  [2,5,8], 
  [0,4,8], 
  [2,4,6]
];

function App() {
  const [boxes, setBoxes] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [end, setEnd] = useState(false);
  const tictoctoe = (index) => {
    if (!end) {
      if (boxes[index] === 0) {
        boxes[index] = 1;
      } else if (boxes[index] === 1) {
        boxes[index] = 2;
      } else {
        boxes[index] = 0;
      }
      setBoxes([...boxes]);
    }else {
      setBoxes(Array(9).fill(0));
      setEnd(false);
    }
  };


  useEffect(() => {
    check.forEach((i) => {
      if (boxes[i[0]] === 1 && boxes[i[1]] === 1 && boxes[i[2]] === 1) {
        setEnd(true);
      }
      if (boxes[i[0]] === 2 && boxes[i[1]] === 2 && boxes[i[2]] === 2) {
        setEnd(true);
      }
    });
  }, [boxes]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="text">GAME TIME</div>
        <div className="group">
          {boxes.map((item, index) => {
            return (
              <div
              key={"box_"+index}
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
