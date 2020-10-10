import { createGlobalStyle } from "styled-components"

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`

const GlobalStyles = createGlobalStyle`
  ${normalize};

  html {
    ${"" /* change this if implementing light/dark mode functionality */}
    color: ${(props) => props.theme.color.primary};

  }
  
  body {
    font-family: ${(props) => props.theme.font.primary};
  }

  
  h1 {
    ${(props) => props.theme.font_size.xlarge};
    font-family: ${(props) => props.theme.font.bold};
    
  }

  h2 {
    ${(props) => props.theme.font_size.larger};
  }

  h3 {
    ${(props) => props.theme.font_size.larger};
    font-family: ${(props) => props.theme.font.bold};
  }

  h4 {
    ${(props) => props.theme.font_size.large};
    font-family: ${(props) => props.theme.font.bold};
  }

  h5 {
    ${(props) => props.theme.font_size.xsmall};
    font-family: ${(props) => props.theme.font.normal};
  }

  p {
    ${(props) => props.theme.font_size.small};
    line-height: 22px;

  }

  input {
    font-family: ${(props) => props.theme.font.normal};
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    h1 {
      ${(props) => props.theme.font_size.larger};
    }

    h2 {
      ${(props) => props.theme.font_size.large};
    }

    h3 {
      ${(props) => props.theme.font_size.regular};
    }

    p {
      ${(props) => props.theme.font_size.small};
    }
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {

    h1 {

    }

    h2 {

    }

    h3 {
      font-size: 32px;
      line-height: 36px;
    }

    h4 {
      font-size: 22px;
      line-height: 24px;
    }
    p {

    }

  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }

  .emoji{
    height:40px;
  }

  .custom-card {
    box-shadow: 5px 8px 24px 5px rgba(208, 216, 243, 0.25);
    border-radius: 10px;
    background-color: white;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 7%;
    padding-left: 8%;
    margin-bottom: 5%;
    height: 910px;
  }

  .per-month{
    font-size: 16px;
    color: grey;
    font-family: 'HK Grotesk Normal';
    vertical-align: super;
  }

  .emojiPricingX {
    margin-top: 10px;
    -webkit-animation: MoveUpDown 1s infinite  alternate;
    animation: MoveUpDown 1s infinite  alternate;
  
  }

  .headerImg {
    margin-top: 10px;
    -webkit-animation: MoveUpDown 1s infinite  alternate;
    animation: MoveUpDown 1s infinite alternate;
    z-index: 99;
    position: relative;


  }

  @keyframes MoveUpDown {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
  }


  @-webkit-@keyframes MoveUpDown {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
  } 

  .disabled-feature{
    color: #b1bacc;
    text-decoration: line-through;
  }

  .footer-links{
    color: black;
    transition: 0.2s ease-in-out;
  }

  .footer-links:hover{
    color: #0055FF;
  }

  .dashboard {
    position: absolute;
    top: 15%;
    right: 0;
    z-index: 1;
    overflow: hidden;
    width: 46%;
    height: 700px;
    border-radius: 25px;
  }

  .resizeImg{
      opacity: 0.5;
    }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    .dashboard {
      position: absolute;
      top: 55%;
      z-index: 1;
      overflow: hidden;
      width: 100%;
      height: 630px;
      border-radius: 25px;
    }
    .resizeImg{
      width:100%;
      opacity: 0.3;
    }
    .faqTitle{
    font-size: 22px;
  }
  }

  .faqTitle{
    font-size: 20px;
  }

  .blueBlock {
    background-color: #0055FF;
    border-radius: 25px;
    padding-top: 60px!important;
    padding-right: 0px!important;
    padding-bottom: 5%!important;
    padding-left: 5%!important;
    width: 100%;
  }

  .featureSplash {
    width: 100%!important;
    margin-bottom: 10%!important;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {

    .blueBlock {
      padding-left: 3%;
      width: 95% !important;
    }

    .h3Title{

    width: 85%;
    margin-left: 2%;

    }

    .dashboard {
      position: absolute;
      top: 60%;
      z-index: 1;
      overflow: hidden;
      width: 100%;
      height: 500px;
      border-radius: 25px;
    }


    .faqTitle{
    font-size: 18px;
    }

    .custom-card{
      height: auto;
      padding-bottom: 120px;
    }

  }


  

`

export default GlobalStyles
