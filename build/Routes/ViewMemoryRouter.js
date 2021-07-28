"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ViewMemoryController = _interopRequireDefault(require("../Controllers/ViewMemoryController"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ViewMemoryRouter = _express["default"].Router();

ViewMemoryRouter.get('/api/v1/memories/:id', _ViewMemoryController["default"].fetchViewMemory);
var _default = ViewMemoryRouter;
exports["default"] = _default;