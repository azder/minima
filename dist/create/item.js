(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../util/create-object", "../util/compose", "../ecode", "../with/data.$", "../with/codes.$"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../util/create-object"), require("../util/compose"), require("../ecode"), require("../with/data.$"), require("../with/codes.$"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.createObject, global.compose, global.ecode, global.data, global.codes);
    global.item = mod.exports;
  }
})(this, function (_exports, _createObject, _compose, _ecode, _data, _codes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _createObject = _interopRequireDefault(_createObject);
  _compose = _interopRequireDefault(_compose);
  _ecode = _interopRequireDefault(_ecode);
  _data = _interopRequireDefault(_data);
  _codes = _interopRequireDefault(_codes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-31. */
  var _default = function _default(data) {
    return (0, _compose.default)((0, _data.default)(data), (0, _codes.default)(_ecode.default.ok))((0, _createObject.default)());
  };

  _exports.default = _default;
  module.exports = exports.default;
});