import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  // state for getting and setting jokes
  const [jokes, setJokes] = useState([]);
  // getting the data from the backend using axioms
  useEffect(() => {
    axios.get("http://localhost:3000/joke").then((res) => {
      setJokes(res.data);
      console.log(res.data);
    });
  });

  return (
    <>
      <h1>Number of avilable jokes are {jokes.length}</h1>
    </>
  );
}

export default App;
