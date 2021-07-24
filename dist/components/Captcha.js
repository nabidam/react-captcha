"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Captcha = props => {
  let element = "<div><canvas id=\"canv\" style=\"background-color: blue;\"></canvas><div><a id=\"reload_href\"  style=\"cursor: pointer; color: blue\">Reload Captcha</a></div></div>";
  return (0, _reactHtmlParser.default)(element);
};

var _default = Captcha;
exports.default = _default;