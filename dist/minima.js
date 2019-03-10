(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./util/create-object", "./util/compose", "./util/curry", "./with/codes.$", "./with/meta.$", "./with/data.$"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./util/create-object"), require("./util/compose"), require("./util/curry"), require("./with/codes.$"), require("./with/meta.$"), require("./with/data.$"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.createObject, global.compose, global.curry, global.codes, global.meta, global.data);
    global.minima = mod.exports;
  }
})(this, function (_exports, _createObject, _compose, _curry, _codes, _meta, _data) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _createObject = _interopRequireDefault(_createObject);
  _compose = _interopRequireDefault(_compose);
  _curry = _interopRequireDefault(_curry);
  _codes = _interopRequireDefault(_codes);
  _meta = _interopRequireDefault(_meta);
  _data = _interopRequireDefault(_data);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-28. */
  // noinspection JSUnusedGlobalSymbols
  var _default = (0, _curry.default)(function (ecode, meta, data) {
    return (0, _compose.default)((0, _data.default)(data), (0, _meta.default)(meta), (0, _codes.default)(ecode))((0, _createObject.default)());
  });

  _exports.default = _default;
  module.exports = exports.default;
});