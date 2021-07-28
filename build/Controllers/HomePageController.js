"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HomePageController = /*#__PURE__*/function () {
  function HomePageController() {
    _classCallCheck(this, HomePageController);
  }

  _createClass(HomePageController, null, [{
    key: "fetchHomePage",
    value: function fetchHomePage(request, response) {
      return response.sendFile(_path["default"].join(__dirname, '../../UI/landingpage.html'));
    }
  }]);

  return HomePageController;
}();

var _default = HomePageController;
exports["default"] = _default;