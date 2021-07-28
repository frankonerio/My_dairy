"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _memories = _interopRequireDefault(require("../Models/memories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AllMemoriesController = /*#__PURE__*/function () {
  function AllMemoriesController() {
    _classCallCheck(this, AllMemoriesController);
  }

  _createClass(AllMemoriesController, null, [{
    key: "fetchAllMemories",
    value: function fetchAllMemories(request, response) {
      return response.json(_memories["default"]);
    }
  }]);

  return AllMemoriesController;
}();

var _default = AllMemoriesController;
exports["default"] = _default;