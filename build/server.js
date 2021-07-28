"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Routes = _interopRequireDefault(require("./Routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 8888;
var server = (0, _express["default"])();

function displayServerMessage() {
  return console.log('My Diary API server is listening on Port 8888');
}

server.use(_Routes["default"]);
server.listen(PORT, displayServerMessage);
var _default = server;
exports["default"] = _default;