(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../ecode", "../with/count.$", "../util/compose", "../with/data.$", "../with/codes.$", "../util/create-object", "../util/identity"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../ecode"), require("../with/count.$"), require("../util/compose"), require("../with/data.$"), require("../with/codes.$"), require("../util/create-object"), require("../util/identity"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ecode, global.count, global.compose, global.data, global.codes, global.createObject, global.identity);
    global.found = mod.exports;
  }
})(this, function (_exports, _ecode, _count, _compose, _data, _codes, _createObject, _identity) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _ecode = _interopRequireDefault(_ecode);
  _count = _interopRequireDefault(_count);
  _compose = _interopRequireDefault(_compose);
  _data = _interopRequireDefault(_data);
  _codes = _interopRequireDefault(_codes);
  _createObject = _interopRequireDefault(_createObject);
  _identity = _interopRequireDefault(_identity);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-31. */
  var _default = function _default(data) {
    return (0, _compose.default)((0, _data.default)(data), Array.isArray(data) ? (0, _count.default)(data) : _identity.default, (0, _codes.default)(_ecode.default.ok))((0, _createObject.default)());
  };

  _exports.default = _default;
  module.exports = exports.default;
});