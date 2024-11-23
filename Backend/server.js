// importing express
import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("server is ready");
});
// creatin a port
const port = process.env.PORT || 3000;
// creating an array to send jokes
const jokes = [
  {
    id: "1",
    title: "first Joke",
    content: "tu joke h",
  },
  {
    id: "2",
    title: "second Joke",
    content: "tu bda joke h",
  },
  {
    id: "3",
    title: "third Joke",
    content: "tu sabse bda joke h",
  },
];
// creating a route by get to send jokes on joke route
app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});
// listen from the server
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
// we will see in standar practice that api follows certain way like url/api/routeName
