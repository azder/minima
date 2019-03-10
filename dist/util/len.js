(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.len = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /** Created by azder on 2018-10-31. */
  var _default = function _default(array) {
    return array && Array.isArray(array) ? array.length : 0;
  };

  _exports.default = _default;
  module.exports = exports.default;
});