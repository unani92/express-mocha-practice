const express = require("express");
const app = express();
const morgan = require("morgan");

// 가라데이터
var users = [
  { id: 1, name: "ai" },
  { id: 2, name: "ai2" },
  { id: 3, name: "ai3" },
  { id: 4, name: "ai4" },
];

// morgan logger
app.use(morgan("dev"));

// api controller
app.get("/users", (req, res) => {
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }
  res.json(users.slice(0, limit));
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const user = users.filter((user) => user.id === id)[0];
  if (!user) return res.status(404).end();

  res.json(user);
});

// 서버 구동부분
app.listen(4000, () => {
  console.log(`server on port http://localhost:4000`);
});

module.exports = app;
