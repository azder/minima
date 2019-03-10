(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./curry", "./of", "./sort"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./curry"), require("./of"), require("./sort"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.curry, global.of, global.sort);
    global.of$ = mod.exports;
  }
})(this, function (_exports, _curry, _of, _sort) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _curry = _interopRequireDefault(_curry);
  _of = _interopRequireDefault(_of);
  _sort = _interopRequireDefault(_sort);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-29. */
  var ALL = Symbol('of$.ALL');
  var of$ = (0, _curry.default)(function (parent, ecode) {
    var ec = (0, _of.default)(parent, ecode);

    if (!of$[ALL].has(ec)) {
      of$[ALL].add(ec);
    }

    return ec;
  });
  var GT = +0.5; // eslint-disable-line

  var LT = -0.5;

  var longer = function longer(a, b) {
    return b.length - a.length || (a > b ? GT : LT);
  } // sort longer on top
  ;

  of$[ALL] = new Set();

  of$.all = function () {
    return (0, _sort.default)(longer, of$[ALL]);
  };

  var _default = of$;
  _exports.default = _default;
  module.exports = exports.default;
});