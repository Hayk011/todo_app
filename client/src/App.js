import React from "react";
import "./App.css";

function App() {
  const [colection, setColection] = React.useState([]);
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    fetch("http://localhost:5000/")
      .then(info => info.json())
      .then(data => setColection(data));
  }, []);
  const sendHandler = () => {
    fetch("http://localhost:5000/", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ value })
    });
  };
  return (
    <div className="App">
      <div>
        <input
          onChange={event => setValue(event.target.value)}
          type="text"
          value={value}
        />
        <button onClick={sendHandler}>Send</button>
      </div>
    </div>
  );
}

export default App;
