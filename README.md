# Reusable react captcha component

It's a react component that you can use it to generate captcha very easy.

Demo: [nabidam-react-captcha.netlify.app](https://nabidam-react-captcha.netlify.app/)

## Installation

```bash
npm install @nabidam/react-captcha
```

## Usage

### Simple usage

1. Import the component.

    ```javascript
    import { Captcha } from "@nabidam/react-captcha"
    ```

2. Define your `state`. We are going to pass setter to the component.

    ```javascript
    const [captcha, setCaptcha] = useState("");
    ```

3. Use the component.

    ```javascript
    <Captcha setWord={setCaptcha}/>
    ```

4. When the parent component is rendered, `setCaptcha` will fire and the value assigned to `captcha`.

### Reload when validation failed

You can reload the captcha whenever user submits the wrong value.

1. Use `useRef` to define a reference to the component.

    ```javascript
    const captchaRef = useRef();
    .
    .
    .
    <Captcha setWord={setCaptcha} ref={captchaRef} />
    ```

2. Call method `initializeCaptcha` from the component whenever user submits wrong value.

    ```javascript
    if(userInput !== captcha){
        // your code
        captchaRef.current.initializeCaptcha();
    }
    ```


## Props

|        name        |     type     |    default     |                      description                      |
| :----------------: | :----------: | :------------: | :---------------------------------------------------: |
|      setWord       |   function   |       -        |           callback to store captcha value.            |
| numberOfCharacters |    number    |       4        |       number of characters to generate captcha        |
|    persianChars    |   boolean    |     false      |           use persian letters to generate?            |
|     reloadText     |    string    | Reload Captcha |               text of the reload button               |
|      reloadEl      | html element |       -        | you can pass reload element entirely to the component |
|  backgroundColor   | color strong |    #0c0c0c     |                color of the background                |
|     fontColor      | color string |      #fff      |                   color of the text                   |

