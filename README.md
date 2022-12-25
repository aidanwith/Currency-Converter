# Currency-Converter

Currency Converter uses [ExchangeRate-API](https://exchangerate-api.com) to update the most current conversion rates on the market. Features an extensive library of currencies, real time exchange updates, and a user-friendly UI  

## Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Demo](#demo)
  - [Links](#links)
  - [The challenge](#the-challenge)
  <!-- - [My process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development)(#continued-development)
  - [Useful resources](#useful-resources) -->
- [Author](#author)
 
 ## Overview
 
 ### Features
 
 Users should be able to:
 
 - Choose from 160 available currencies
 - Enter a number at the top `input` and receive a result at the bottom input
 - See the result calculated in real-time as input is entered
 - Swap top and bottom currencies using `switch` button
 
 ### Demo

<img src="https://github.com/aidanwith/Currency-Converter/blob/main/Test.gif" width="600">

### Links

- Live Site URL: [https://insertlinkhere/](https://insertlinkhere/)

### The Challenge
The main challenge I had with this project was configuring the API to seamlessly integrate with the other elements of the project. Once I developed the initial version of the converter with HTML, CSS, and JavaScript I realised that my API key would be available for everyone on the internet to see. I knew that I needed to obfuscate my API key to ensure that sensitive information would be kept out of the eyes of those looking to take advantage. I was stuck between Django, Node.js, and PHP as potential solutions to ensure the security of the converter. I chose to work in PHP as I wanted to get more exposure to a very common server-side language present in many real-world applications. 

## My process

### Built with

- HTML5 markup
- CSS
- PHP

### What I learned

My first exposure to PHP was an incredible learning experience for me. Primarily using C#, JavaScript, and Python in my university programming courses I felt very unprepared starting this project. The issue I faced was getting the exchange rates from the API and integrating them with the rest of the project. At first, I was getting too much data from the API when I ran the program. After setting what information I wanted to get from the API, like the currency the user was coming from and the currency they wanted to convert to, I was able to fully integrate the API using PHP. I also had to learn to use Apache Web Server to debug and test my project during the development process as my previous experience has been mostly with command line applications. 

To see how you can add code snippets, see below:

```html
<button onclick="callRequestConversion()" type="submit">Convert</button>
```

```css
body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 10px;
    background: #2175dc;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
}
```

```js
function loadFlag(element){
    for(code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://hatscripts.github.io/circle-flags/flags/${country_list[code].toLowerCase()}.svg`;
            console.log(country_list[code].toLowerCase());
        }
    }
}
```

### Continued development

This project was my first exposure to PHP and I grew immensely from the start of the project to the end. I aim to continue exposing myself to PHP to improve.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [aidanw.me](https://aidanw.me/)
- Linkedin - [Aidan Witherow](https://www.linkedin.com/in/aidanwitherow/)
