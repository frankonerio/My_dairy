"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _query = require("../Helpers/query");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ViewMemoryController = /*#__PURE__*/function () {
  function ViewMemoryController() {
    _classCallCheck(this, ViewMemoryController);
  }

  _createClass(ViewMemoryController, null, [{
    key: "fetchViewMemory",
    value: function fetchViewMemory(request, response) {
      var diaryId = request.params.id;
      var memory = (0, _query.getMemory)(diaryId);
      if (!memory) return response.status(404).json({
        message: "Result not found"
      });
      return response.json(memory);
    }
  }]);

  return ViewMemoryController;
}();

var _default = ViewMemoryController;
exports["default"] = _default;