"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _MemoryCreateController = _interopRequireDefault(require("../Controllers/MemoryCreateController"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MemoryCreateRouter = _express["default"].Router();

MemoryCreateRouter.post('/api/v1/memories/', _MemoryCreateController["default"].createMemory);
var _default = MemoryCreateRouter;
exports["default"] = _default;