import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("cyan");
  return (
    <>
      <h1 className="text-3xl font-bold underline">God Sushant Aayan Pro!</h1>
      <div className="container" style={{ backgroundColor: color }}>
        <h1 className="text-green-600">BackGround Color Changer</h1>
        <div className="colorContainer">
          <button
            className="colorbutton"
            onClick={() => {
              setColor("violet");
            }}
          >
            Violet
          </button>
          <button
            className="colorbutton"
            onClick={() => {
              setColor("#ff084a");
            }}
          >
            Pink
          </button>
          <button
            className="colorbutton"
            onClick={() => {
              setColor("black");
            }}
          >
            Black
          </button>
          <button
            className="colorbutton"
            onClick={() => {
              setColor("Green");
            }}
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
