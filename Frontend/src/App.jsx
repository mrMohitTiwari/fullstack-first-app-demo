import { useState } from "react";

function App() {
  // state for getting and setting jokes
  const [jokes, setJokes] = useState([]);
  // getting the data from the backend using axioms

  return (
    <>
      <h1>Number of avilable jokes are {jokes.length}</h1>
    </>
  );
}

export default App;
