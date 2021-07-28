"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMemory = exports.createMemory = exports.deleteMemory = exports.getMemory = void 0;

var _memories = _interopRequireDefault(require("../Models/memories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getMemory = function getMemory(id) {
  var result = _memories["default"].find(function (memory) {
    return memory.id === +id;
  });

  return result;
};

exports.getMemory = getMemory;

var deleteMemory = function deleteMemory(id) {
  var remainingMemories = _memories["default"].filter(function (memory) {
    return memory.id !== +id;
  });

  _memories["default"].splice(0, _memories["default"].length); // deletes all memories in the array


  _memories["default"].push.apply(_memories["default"], _toConsumableArray(remainingMemories)); // pushes remaining memories into the empty array

};

exports.deleteMemory = deleteMemory;

var createMemory = function createMemory(title, story, mood, picture) {
  _memories["default"].push({
    id: _memories["default"].length + 1,
    title: title,
    mood: mood,
    picture: picture,
    story: story,
    date: new Date()
  });
};

exports.createMemory = createMemory;

var updateMemory = function updateMemory(id, title, story, mood, picture) {
  var _Date, _memories$result;

  var result = _memories["default"].findIndex(function (memory) {
    return memory.id === +id;
  });

  _memories["default"][result] = (_memories$result = {
    id: id,
    title: title,
    mood: mood,
    picture: picture,
    story: story,
    date: new Date()
  }, _defineProperty(_memories$result, "id", id), _defineProperty(_memories$result, "title", title !== null && title !== void 0 ? title : _memories["default"][result].title), _defineProperty(_memories$result, "mood", mood !== null && mood !== void 0 ? mood : _memories["default"][result].mood), _defineProperty(_memories$result, "picture", picture !== null && picture !== void 0 ? picture : _memories["default"][result].picture), _defineProperty(_memories$result, "story", story !== null && story !== void 0 ? story : _memories["default"][result].story), _defineProperty(_memories$result, "date", (_Date = new Date()) !== null && _Date !== void 0 ? _Date : _memories["default"][result].date), _memories$result);
};

exports.updateMemory = updateMemory;