(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./string", "../ecode"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./string"), require("../ecode"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.string, global.ecode);
    global.ecode = mod.exports;
  }
})(this, function (_exports, _string, _ecode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.PATTERN = void 0;
  _string = _interopRequireDefault(_string);
  _ecode = _interopRequireDefault(_ecode);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /** Created by azder on 2018-10-28. */
  var PATTERN = "^".concat(_ecode.default.ROOT, "\\.[-a-z.]*[^.*]$");
  _exports.PATTERN = PATTERN;
  var regx = new RegExp(PATTERN);

  var _default = function _default(ecode) {
    return (0, _string.default)(ecode) && !!ecode.match(regx);
  };

  _exports.default = _default;
});