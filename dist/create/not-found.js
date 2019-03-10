(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../ecode", "../with/codes.$", "../util/create-object"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../ecode"), require("../with/codes.$"), require("../util/create-object"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ecode, global.codes, global.createObject);
    global.notFound = mod.exports;
  }
})(this, function (_exports, _ecode, _codes, _createObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _ecode = _interopRequireDefault(_ecode);
  _codes = _interopRequireDefault(_codes);
  _createObject = _interopRequireDefault(_createObject);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-31. */
  var _default = function _default() {
    return (0, _codes.default)(_ecode.default.c.notFound, (0, _createObject.default)());
  };

  _exports.default = _default;
  module.exports = exports.default;
});