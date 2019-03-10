(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../util/asg.$", "../util/curry", "../util/compose", "../keys", "../hcode", "../xcode"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../util/asg.$"), require("../util/curry"), require("../util/compose"), require("../keys"), require("../hcode"), require("../xcode"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.asg, global.curry, global.compose, global.keys, global.hcode, global.xcode);
    global.codes$ = mod.exports;
  }
})(this, function (_exports, _asg, _curry, _compose, _keys, _hcode, _xcode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _asg = _interopRequireDefault(_asg);
  _curry = _interopRequireDefault(_curry);
  _compose = _interopRequireDefault(_compose);
  _keys = _interopRequireDefault(_keys);
  _hcode = _interopRequireDefault(_hcode);
  _xcode = _interopRequireDefault(_xcode);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-31. */
  var _default = (0, _curry.default)(function (ecode, minima) {
    return (0, _compose.default)((0, _asg.default)(_keys.default.xcode, (0, _xcode.default)(ecode)), (0, _asg.default)(_keys.default.hcode, (0, _hcode.default)(ecode)), (0, _asg.default)(_keys.default.ecode, ecode))(minima);
  });

  _exports.default = _default;
  module.exports = exports.default;
});