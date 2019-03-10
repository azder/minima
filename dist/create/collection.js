(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../ecode", "../with/count.$", "../util/compose", "../with/data.$", "../with/codes.$", "../util/create-object"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../ecode"), require("../with/count.$"), require("../util/compose"), require("../with/data.$"), require("../with/codes.$"), require("../util/create-object"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ecode, global.count, global.compose, global.data, global.codes, global.createObject);
    global.collection = mod.exports;
  }
})(this, function (_exports, _ecode, _count, _compose, _data, _codes, _createObject) {
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

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-31. */
  var _default = function _default(collection) {
    return (0, _compose.default)((0, _data.default)(collection), (0, _count.default)(collection), (0, _codes.default)(_ecode.default.ok))((0, _createObject.default)());
  };

  _exports.default = _default;
  module.exports = exports.default;
});