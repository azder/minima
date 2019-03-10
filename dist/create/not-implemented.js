(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../ecode", "../with/codes.$", "../util/create-object", "../util/of.$"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../ecode"), require("../with/codes.$"), require("../util/create-object"), require("../util/of.$"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ecode, global.codes, global.createObject, global.of);
    global.notImplemented = mod.exports;
  }
})(this, function (_exports, _ecode, _codes, _createObject, _of) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _ecode = _interopRequireDefault(_ecode);
  _codes = _interopRequireDefault(_codes);
  _createObject = _interopRequireDefault(_createObject);
  _of = _interopRequireDefault(_of);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-31. */
  var _default = function _default(what) {
    return (0, _codes.default)((0, _of.default)(_ecode.default.s.notImplemented, what), (0, _createObject.default)());
  };

  _exports.default = _default;
  module.exports = exports.default;
});