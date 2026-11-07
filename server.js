const express = require("express");

const friendsRouter = require("./routes/friends.router.js");
const messagesRouter = require("./routes/messages.router.js");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} - ${delta}ms`);
});

app.use(express.json());
// Friends controller
app.use("/friends", friendsRouter);
// Messages controller
app.use("/messages", messagesRouter);
// server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
