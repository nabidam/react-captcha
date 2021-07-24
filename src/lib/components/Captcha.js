import ReactHtmlParser from "react-html-parser";

const Captcha = (props) => {
  let element = `<div><canvas id="canv" style="background-color: blue;"></canvas><div><a id="reload_href"  style="cursor: pointer; color: blue">Reload Captcha</a></div></div>`;

  return ReactHtmlParser(element);
};

export default Captcha;
