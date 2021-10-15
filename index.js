/** @format */

const http = require("http");
const PORT = 5000;
const server = http.createServer((req, res) => {
  console.log("req", req);
  console.log("res", res);
});

server.listen(PORT, () => console.log("Server 5000", PORT));

// index.js
const argv = require("yargs").argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
