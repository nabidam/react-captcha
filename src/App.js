import { useRef, useState } from "react";
import "./App.css";
import { Captcha } from "./lib";

function App() {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [res, setRes] = useState("");
  const captchaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha === captchaInput) {
      setRes("OK");
    } else {
      captchaRef.current.initializeCaptcha();
      setRes("fail");
    }
  };
  return (
    <div className="App">
      <Captcha setWord={setCaptcha} ref={captchaRef} persianChars={true} />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
        />
        <input type="submit" />
      </form>

      <div>{res}</div>
    </div>
  );
}

export default App;
