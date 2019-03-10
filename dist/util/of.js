(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./curry"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./curry"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.curry);
    global.of = mod.exports;
  }
})(this, function (_exports, _curry) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _curry = _interopRequireDefault(_curry);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var UNWANTED_CHARS = /[^a-z0-9-]/g;
  var MULTIPLE_DOTS = /\.+/g;
  var FINAL_DOT = /\.$/g;

  var _default = (0, _curry.default)(function (parent, ecode) {
    return String(ecode ? "".concat(parent, ".").concat(String(ecode)) : parent).toLowerCase().replace(UNWANTED_CHARS, '.').replace(MULTIPLE_DOTS, '.').replace(FINAL_DOT, '');
  });

  _exports.default = _default;
  module.exports = exports.default;
});