# Currency-Converter

Currency Converter uses [ExchangeRate-API](https://exchangerate-api.com) to update the most current conversion rates on the market. Features an extensive library of currencies, real time exchange updates, and a user-friendly UI  

## Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Demo](#demo)
  - [Links](#links)
- [The challenge](#the-challenge)
  - [My Process](#my-process)
  - [Built With](#built-with)
- [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
 
 ## Overview
 
 ### Features
 
 Users should be able to:
 
 - Choose from 160 available currencies
 - Enter a number at the top `Enter Amount` and receive a result at the bottom input
 - See the result calculated in real-time as input is entered
 - Swap top and bottom currencies using `switch` icon
 
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

### Continued Development

I aim to include a graph of current conversion rates based on user selection. The challenge will be to not only find or create a reliable API but also to include a graph that is aesthetically pleasing in design, integrates well with the existing layout and also conveys enough information to be useful to users. 

### Useful resources

- [API Help](https://stackoverflow.com/a/9802886) - This resource helped to call the API to start reading in data.
- [Install XAMPP on Mac](https://medium.com/analytics-vidhya/download-and-install-xampp-on-mac-oshow-to-download-and-install-xampp-on-mac-os-97705974080d) - This is an amazing article which helped me understand how to run an apache web server locally. While this article wasn't the most challenging or mentally stimulating part of the project, I'd recommend at least skimming through it for anyone who has not had prior experience with running a web server or running anything that isn't hosted locally.

## Author

- Website - [aidanw.me](https://aidanw.me/)
- Linkedin - [Aidan Witherow](https://www.linkedin.com/in/aidanwitherow/)
