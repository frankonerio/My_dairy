"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _IndexRouter = _interopRequireDefault(require("./IndexRouter"));

var _HomePageRouter = _interopRequireDefault(require("./HomePageRouter"));

var _AllMemoriesRouter = _interopRequireDefault(require("./AllMemoriesRouter"));

var _ViewMemoryRouter = _interopRequireDefault(require("./ViewMemoryRouter"));

var _MemoryDeleteRouter = _interopRequireDefault(require("./MemoryDeleteRouter"));

var _MemoryCreateRouter = _interopRequireDefault(require("./MemoryCreateRouter"));

var _MemoryUpdateRouter = _interopRequireDefault(require("./MemoryUpdateRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var index = _express["default"].Router();

index.use(_express["default"].json()); // merge IndexRouter into index

index.use(_AllMemoriesRouter["default"], _HomePageRouter["default"], _ViewMemoryRouter["default"], _IndexRouter["default"], _MemoryDeleteRouter["default"], _MemoryCreateRouter["default"], _MemoryUpdateRouter["default"]);
var _default = index;
exports["default"] = _default;