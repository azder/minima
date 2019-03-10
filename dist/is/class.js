(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../is/string"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../is/string"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.string);
    global._class = mod.exports;
  }
})(this, function (_exports, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _string = _interopRequireDefault(_string);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-29. */
  var _default = function _default(clazz, ecode) {
    return (0, _string.default)(clazz) && (0, _string.default)(ecode) && (clazz === ecode || ecode.startsWith("".concat(clazz, ".")));
  };

  _exports.default = _default;
  module.exports = exports.default;
});