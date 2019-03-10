(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ecode", "./is/string"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ecode"), require("./is/string"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ecode, global.string);
    global.hcode = mod.exports;
  }
})(this, function (_exports, _ecode, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _ecode = _interopRequireDefault(_ecode);
  _string = _interopRequireDefault(_string);

  var _Object$freeze;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var ANY = _ecode.default.ANY;
  var ANY_K = _ecode.default.k[ANY];
  var ANY_C = _ecode.default.c[ANY];
  var ANY_M = _ecode.default.m[ANY];
  var ANY_V = _ecode.default.v[ANY];
  var ANY_S = _ecode.default.s[ANY];
  var ANY_D = _ecode.default.d[ANY];
  var MINIMA_ERROR = 599;
  var GOOD = 200;
  var CLIE = 400;
  var SEMA = 422;
  var SERV = 500;
  var SERV_NOT_IMPLEMENTED = 501;
  var MAP = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, ANY_K, GOOD), _defineProperty(_Object$freeze, ANY_C, CLIE), _defineProperty(_Object$freeze, ANY_M, SEMA), _defineProperty(_Object$freeze, ANY_V, SEMA), _defineProperty(_Object$freeze, ANY_S, SERV), _defineProperty(_Object$freeze, ANY_D, SERV), _defineProperty(_Object$freeze, _ecode.default.k.created, 201), _defineProperty(_Object$freeze, _ecode.default.c.unauthorized, 401), _defineProperty(_Object$freeze, _ecode.default.c.forbidden, 403), _defineProperty(_Object$freeze, _ecode.default.c.notFound, 404), _Object$freeze)); // noinspection JSUnusedGlobalSymbols

  var _default = function _default(ec) {
    if (!(0, _string.default)(ec)) {
      return MINIMA_ERROR;
    }

    if (MAP[ec]) {
      return MAP[ec];
    }

    if (ec.startsWith(ANY_K)) {
      return GOOD;
    }

    if (ec.startsWith(ANY_M)) {
      return SEMA;
    }

    if (ec.startsWith(ANY_C)) {
      return CLIE;
    }

    if (ec.startsWith(_ecode.default.s.notImplemented)) {
      return SERV_NOT_IMPLEMENTED;
    }

    return SERV;
  };

  _exports.default = _default;
  module.exports = exports.default;
});