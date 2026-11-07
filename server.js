const express = require("express");

const friendsController = require("./controllers/friends.controller.js");
const messagesController = require("./controllers/messages.controller.js");

const app = express();
const PORT = 3000;

app.use(express.json());
// Friends controller
app.get("/friends", friendsController.getFriends);
app.get("/friends/:id", friendsController.getFriend);
app.post("/friends", friendsController.postFriend);
// Messages controller
app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);
// server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
