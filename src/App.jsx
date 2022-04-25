import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Button2 from "./Button2";
import React, { useState, useEffect } from "react";

function App() {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const [output, setOutput] = useState("0");
  const [active, setActive] = useState(false);

  function handleClick(value) {
    let newOutput = output;
    if (newOutput === "0" || newOutput === "Happy Birthday") newOutput = "";
    setOutput(newOutput + value);
  }

  async function handleRand() {
    let a = "";
    await fetch(
      `https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new`
    )
      .then((response) => response.json())
      .then((data) => (a = data.toString()));
    setOutput(a);
  }

  useEffect(() => {
    if(active && output !== "0") {
      let cur = parseInt(output);
      cur -= 1;
      setOutput(cur.toString())
    } else if(active && output === "0") {
      setOutput("Happy Birthday")
      setActive(false)
    }
  }, [active, output])

  function handleStart() {
    setActive(true)
  }

  function createButton(n) {
    return <Button value={n} click={() => handleClick(n)}></Button>;
  }

  return (
    <div className="App">
      <div className="pad2">
        <h1>{output}</h1>
      </div>
      <div className="pad">
        {numbers.map((n) => createButton(n))}
        <Button value="Random" click={handleRand}></Button>
        <Button value="Start" click={handleStart}></Button>
      </div>
    </div>
  );
}

export default App;
