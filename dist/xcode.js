(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ecode", "./is/string"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ecode"), require("./is/string"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ecode, global.string);
    global.xcode = mod.exports;
  }
})(this, function (_exports, _ecode, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _ecode = _interopRequireDefault(_ecode);
  _string = _interopRequireDefault(_string);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var MINIMA_ERROR = 128;
  var SUCCESS = 0;
  var ERROR = 1; // noinspection JSUnusedGlobalSymbols

  var _default = function _default(ec) {
    if (!(0, _string.default)(ec)) {
      return MINIMA_ERROR;
    }

    if (ec.startsWith(_ecode.default.ok)) {
      return SUCCESS;
    }

    return ERROR;
  };

  _exports.default = _default;
  module.exports = exports.default;
});