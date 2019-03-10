(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./util/xt.$", "./util/of.$"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./util/xt.$"), require("./util/of.$"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.xt, global.of);
    global.ecode = mod.exports;
  }
})(this, function (_exports, _xt, _of) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _xt = _interopRequireDefault(_xt);
  _of = _interopRequireDefault(_of);

  var _xt$, _xt$2, _xt$4, _xt$5, _xt$7;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var ROOT = 'e';
  var ANY = '_';
  var EMPTY = '';
  var DEFAULT = EMPTY;
  var okay = (0, _of.default)("".concat(ROOT, ".ok"));
  var goto = (0, _of.default)("".concat(ROOT, ".go"));
  var clie = (0, _of.default)("".concat(ROOT, ".cl"));
  var serv = (0, _of.default)("".concat(ROOT, ".sv"));
  var sema = (0, _of.default)(clie('semantic'));
  var vali = (0, _of.default)(sema('invalid'));
  var data = (0, _of.default)(serv('data'));
  var k = (0, _xt.default)(okay, (_xt$ = {}, _defineProperty(_xt$, ANY, okay(DEFAULT)), _defineProperty(_xt$, "created", okay('created')), _xt$));
  var g = (0, _xt.default)(goto, (_xt$2 = {}, _defineProperty(_xt$2, ANY, goto(DEFAULT)), _defineProperty(_xt$2, "found", goto('found')), _defineProperty(_xt$2, "tempo", goto('tempo')), _defineProperty(_xt$2, "perma", goto('perma')), _xt$2));
  var v = (0, _xt.default)(vali, _defineProperty({}, ANY, vali(DEFAULT)));
  var m = (0, _xt.default)(sema, (_xt$4 = {}, _defineProperty(_xt$4, ANY, sema(DEFAULT)), _defineProperty(_xt$4, "invalid", v), _xt$4));
  var c = (0, _xt.default)(clie, (_xt$5 = {}, _defineProperty(_xt$5, ANY, clie(DEFAULT)), _defineProperty(_xt$5, "unauthorized", clie('unauthorized')), _defineProperty(_xt$5, "forbidden", clie('forbidden')), _defineProperty(_xt$5, "notFound", clie('not-found')), _defineProperty(_xt$5, "semantic", m), _xt$5));
  var d = (0, _xt.default)(data, _defineProperty({}, ANY, data(DEFAULT)));
  var s = (0, _xt.default)(serv, (_xt$7 = {}, _defineProperty(_xt$7, ANY, serv(DEFAULT)), _defineProperty(_xt$7, "notImplemented", serv('not-implemented')), _defineProperty(_xt$7, "database", data()), _xt$7)); // noinspection JSUnusedGlobalSymbols

  var _default = {
    ok: k(EMPTY),
    goto: g(EMPTY),
    client: c(EMPTY),
    semantic: m(EMPTY),
    invalid: v(EMPTY),
    server: s(EMPTY),
    database: d(EMPTY),
    a: _of.default.all,
    k: k,
    g: g,
    c: c,
    v: v,
    m: m,
    s: s,
    d: d,
    ROOT: ROOT,
    ANY: ANY,
    DEFAULT: DEFAULT
  };
  _exports.default = _default;
  module.exports = exports.default;
});