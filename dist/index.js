"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Captcha", {
  enumerable: true,
  get: function get() {
    return _Captcha.default;
  }
});
Object.defineProperty(exports, "loadCaptchaEnginge", {
  enumerable: true,
  get: function get() {
    return _loadCaptchaEnginge.default;
  }
});

var _Captcha = _interopRequireDefault(require("./components/Captcha"));

var _loadCaptchaEnginge = _interopRequireDefault(require("./helpers/loadCaptchaEnginge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }