"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _query = require("../Helpers/query");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MemoryUpdateController = /*#__PURE__*/function () {
  function MemoryUpdateController() {
    _classCallCheck(this, MemoryUpdateController);
  }

  _createClass(MemoryUpdateController, null, [{
    key: "updateMemory",
    value: function updateMemory(request, response) {
      var id = request.params.id;
      var title = request.body.title;
      var mood = request.body.mood;
      var story = request.body.story;
      var picture = request.body.picture;
      (0, _query.updateMemory)(id, title, story, mood, picture);
      return response.status(200).json({
        message: "Memory has been updated"
      });
    }
  }]);

  return MemoryUpdateController;
}();

var _default = MemoryUpdateController;
exports["default"] = _default;