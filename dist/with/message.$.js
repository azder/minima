(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../keys", "../util/asg.$"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../keys"), require("../util/asg.$"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.keys, global.asg);
    global.message$ = mod.exports;
  }
})(this, function (_exports, _keys, _asg) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _keys = _interopRequireDefault(_keys);
  _asg = _interopRequireDefault(_asg);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-31. */
  var _default = (0, _asg.default)(_keys.default.message);

  _exports.default = _default;
  module.exports = exports.default;
});