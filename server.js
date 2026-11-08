const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router.js");
const messagesRouter = require("./routes/messages.router.js");

const app = express();
const PORT = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} - ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "My friends",
    caption: "A list of my friends",
  });
});
// Friends controller
app.use("/friends", friendsRouter);

// Messages controller
app.use("/messages", messagesRouter);

// server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
