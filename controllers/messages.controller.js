const path = require("path");
function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
}
function postMessage(req, res) {
  res.send("Message received!");
}

module.exports = {
  getMessages,
  postMessage,
};
