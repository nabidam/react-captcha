const loadCaptchaEnginge = (
  numberOfCharacters,
  backgroundColor = "white",
  fontColor = "black",
  charMap = ""
) => {
  let retVal = "";
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if (charMap === "upper") {
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (charMap === "lower") {
    charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  }

  let length = parseInt(numberOfCharacters);

  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }

  let captcha = retVal;

  //   captcha_value = captcha;

  let canvas = document.getElementById("canv"),
    ctx = canvas.getContext("2d");
  let text = captcha;
  let lineheight = 30;

  let lines = text.split("\n");
  ctx.canvas.width = parseInt(length) * 25;
  ctx.canvas.height = lines.length * lineheight;

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.textBaseline = "middle";
  ctx.font = "italic 20px Arial";
  ctx.fillStyle = fontColor;

  let num = 0;
  for (let i = 0; i < parseInt(length); i++) {
    num = parseInt(num) + 1;
    let heigt_num = 20 * num;
    ctx.fillText(
      retVal[i],
      heigt_num,
      Math.round(Math.random() * (15 - 12) + 12)
    );
  }

  document.getElementById("reload_href").onclick = function () {
    loadCaptchaEnginge(captcha, backgroundColor, fontColor, charMap);
  };

  return captcha;
};

export default loadCaptchaEnginge;
