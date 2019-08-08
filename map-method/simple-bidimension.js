import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [state, setState] = useState({
    title: "",
    users: [
      { name: "Alisson", idade: ["19", "2000"] },
      { name: "Letícia", idade: ["18", "2001"] },
      { name: "Karina", idade: ["18", "2001"] }
    ]
  });

  function handlerCreateCard(e) {
    const newState = { ...state };
    newState.title = e.target.value;
    setState(newState);
  }

  console.log(state);

  return (
    <>
      <div className="App">
        <div className="container">
          <span>{state.title && state.title}</span>
          <input type="text" onChange={e => handlerCreateCard(e)} />
          <div className="card">
            {state.users.map((user, index) => {
              return (
                <div key={index}>
                  {user.name} <br />
                  {user.idade.map((idade, id) => {
                    return <input key={id} value={idade} />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
