(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../util/curry"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../util/curry"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.curry);
    global.meta$ = mod.exports;
  }
})(this, function (_exports, _curry) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _curry = _interopRequireDefault(_curry);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-31. */
  var _default = (0, _curry.default)(function (meta, o) {
    "".concat(meta) === meta ? o.message = meta : Object.assign(o, meta);
    return o;
  });

  _exports.default = _default;
  module.exports = exports.default;
});