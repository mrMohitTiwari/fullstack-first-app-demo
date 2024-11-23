import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  // state for getting and setting jokes
  const [jokes, setJokes] = useState([]);
  // getting the data from the backend using axioms
  useEffect(() => {
    axios.get("/api/jokes").then((res) => {
      setJokes(res.data);
    });
  }, []);

  return (
    <>
      <h1>Dispalying jokes</h1>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
// when we try to run the application it shows CORS error but in order for us to use that we should
// first sol is to install cors package in your server.js
// http://localhost:3000 we will erase that much from the axiom url because currently our api name is http://localhost:3000 but what if in future this changes to something e
// now we will use the concept of proxies
// in vite we will set the proxy using viteconfig file
// add option server
// we can add everything we want
