import React, { useState, useEffect } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([
    { id: 1, name: "repo-teste1" },
    { id: 2, name: "repo-teste2" },
    { id: 3, name: "repo-teste3" },
    { id: 4, name: "repo-teste4" }
  ]);

  function handlerAppRepositorie() {
    setRepositories([...repositories, { id: Math.random, name: "novo Repo" }]);
  }

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={handlerAppRepositorie}>Adicionar um repositório</button>
    </>
  );
}
