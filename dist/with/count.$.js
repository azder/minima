(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../keys", "../util/curry", "../util/asg.$", "../util/len"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../keys"), require("../util/curry"), require("../util/asg.$"), require("../util/len"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.keys, global.curry, global.asg, global.len);
    global.count$ = mod.exports;
  }
})(this, function (_exports, _keys, _curry, _asg, _len) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _keys = _interopRequireDefault(_keys);
  _curry = _interopRequireDefault(_curry);
  _asg = _interopRequireDefault(_asg);
  _len = _interopRequireDefault(_len);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-31. */
  var _default = (0, _curry.default)(function (collection, minima) {
    return (0, _asg.default)(_keys.default.count, (0, _len.default)(collection), minima);
  });

  _exports.default = _default;
  module.exports = exports.default;
});