"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _query = require("../Helpers/query");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MemoryCreateController = /*#__PURE__*/function () {
  function MemoryCreateController() {
    _classCallCheck(this, MemoryCreateController);
  }

  _createClass(MemoryCreateController, null, [{
    key: "createMemory",
    value: function createMemory(request, response) {
      var title = request.body.title;
      var mood = request.body.mood;
      var story = request.body.story;
      var picture = request.body.picture;
      (0, _query.createMemory)(title, story, mood, picture);
      return response.status(201).json({
        message: "Memory has been created"
      });
    }
  }]);

  return MemoryCreateController;
}();

var _default = MemoryCreateController;
exports["default"] = _default;