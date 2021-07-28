"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AllMemoriesController = _interopRequireDefault(require("../Controllers/AllMemoriesController"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AllmemoriesRouter = _express["default"].Router();

AllmemoriesRouter.get('/api/v1/memories', _AllMemoriesController["default"].fetchAllMemories);
var _default = AllmemoriesRouter;
exports["default"] = _default;