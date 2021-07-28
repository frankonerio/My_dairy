"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HomePageController = _interopRequireDefault(require("../Controllers/HomePageController"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HomepageRouter = _express["default"].Router();

HomepageRouter.use(_express["default"]["static"](_path["default"].join(__dirname, '..', '..', '/UI')));
HomepageRouter.get('/', _HomePageController["default"].fetchHomePage);
var _default = HomepageRouter;
exports["default"] = _default;