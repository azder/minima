(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../is/ecode"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../is/ecode"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ecode);
    global.ecode = mod.exports;
  }
})(this, function (_exports, _ecode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _ecode = _interopRequireDefault(_ecode);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-28. */
  var _default = function _default(minima) {
    return minima && (0, _ecode.default)(minima.ecode);
  };

  _exports.default = _default;
  module.exports = exports.default;
});