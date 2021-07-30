"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.reverse.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _react = require("react");

const Captcha = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    word,
    setWord,
    numberOfCharacters = 4,
    backgroundColor = "#0c0c0c",
    fontColor = "#fff",
    persianChars = false,
    reloadText = "Reload Captcha",
    reloadEl,
    reloadOnFail
  } = _ref;
  const canvas = (0, _react.useRef)(null);
  const charset = persianChars ? "ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی" : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let length = parseInt(numberOfCharacters);

  const initializeCaptcha = () => {
    let retVal = "";
    let captcha = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    if (persianChars) {
      captcha = retVal.split("").reverse().join("");
    } else {
      captcha = retVal;
    }

    setWord(captcha);
    const canvasEl = canvas.current;
    const ctx = canvasEl.getContext("2d");
    let text = captcha;
    let lineheight = 30;
    let lines = text.split("\n");
    ctx.canvas.width = parseInt(length) * 25;
    ctx.canvas.height = lines.length * lineheight;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
    ctx.textBaseline = "middle";
    ctx.font = "italic 20px Arial";
    ctx.fillStyle = fontColor;
    let num = 0;

    for (let i = 0; i < parseInt(length); i++) {
      num = parseInt(num) + 1;
      let heigt_num = 20 * num;
      ctx.fillText(retVal[i], heigt_num, Math.round(Math.random() * (15 - 12) + 12));
    }
  };

  (0, _react.useImperativeHandle)(ref, () => ({
    initializeCaptcha
  }));
  (0, _react.useEffect)(() => {
    initializeCaptcha();
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("canvas", {
    ref: canvas,
    width: 100,
    height: 100
  }), /*#__PURE__*/React.createElement("div", null, reloadEl !== null && reloadEl !== void 0 ? reloadEl : /*#__PURE__*/React.createElement("a", {
    id: "reload_href",
    style: {
      cursor: "pointer",
      backgroundColor,
      color: fontColor
    },
    onClick: initializeCaptcha
  }, reloadText)));
});
var _default = Captcha;
exports.default = _default;