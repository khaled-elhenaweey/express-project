function getMessages(req, res) {
  res.send("Hello from the messages controller!");
}
function postMessage(req, res) {
  res.send("Message received!");
}

module.exports = {
  getMessages,
  postMessage,
};
