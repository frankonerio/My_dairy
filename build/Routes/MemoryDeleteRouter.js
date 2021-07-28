"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _MemoryDeleteController = _interopRequireDefault(require("../Controllers/MemoryDeleteController"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MemoryDeleteRouter = _express["default"].Router();

MemoryDeleteRouter["delete"]('/api/v1/memories/:id', _MemoryDeleteController["default"].deleteMemory);
var _default = MemoryDeleteRouter;
exports["default"] = _default;