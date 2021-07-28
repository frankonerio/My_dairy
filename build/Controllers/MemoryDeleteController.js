"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _query = require("../Helpers/query");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MemoryDeleteController = /*#__PURE__*/function () {
  function MemoryDeleteController() {
    _classCallCheck(this, MemoryDeleteController);
  }

  _createClass(MemoryDeleteController, null, [{
    key: "deleteMemory",
    value: function deleteMemory(request, response) {
      var diaryId = request.params.id;
      (0, _query.deleteMemory)(diaryId);
      return response.status(200).json({
        message: "Memory have been deleted"
      });
    }
  }]);

  return MemoryDeleteController;
}();

var _default = MemoryDeleteController;
exports["default"] = _default;