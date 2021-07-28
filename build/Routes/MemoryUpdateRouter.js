"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _MemoryUpdateController = _interopRequireDefault(require("../Controllers/MemoryUpdateController"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MemoryUpdateRouter = _express["default"].Router();

MemoryUpdateRouter.put('/api/v1/memories/:id', _MemoryUpdateController["default"].updateMemory);
var _default = MemoryUpdateRouter;
exports["default"] = _default;