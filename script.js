const dropList = document.querySelectorAll(".drop-down__list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");

for(let i = 0; i < dropList.length; i++) {
    for(currency_code in country_list) {
        let selected;
        if(i == 0) {
            selected = currency_code == "USD" ? "selected" : "";
        } else if(i == 1) {
            selected = currency_code == "EUR" ? "selected" : "";
        }
        var className = i == 0 ? "currency__code__option__from" : "currency__code__option__to";
        let optionTag = `<option class=${className} value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target);
    });
}

function loadFlag(element){
    for(code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://hatscripts.github.io/circle-flags/flags/${country_list[code].toLowerCase()}.svg`;
            console.log(country_list[code].toLowerCase());
        }
    }
}

window.addEventListener("load", () =>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();
});

const exchangeIcon = document.querySelector(".drop-down__list .icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});



function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    exchangeRateTxt = document.querySelector("form .exchange__rate");
    const field2 = document.querySelector("#field2");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    let url = ``;
    fetch(url).then(response => response.json()).then(result => {
        let exchangerate = result.conversion_rates[toCurrency.value]
        let totalExchangeRate = (amountVal * exchangerate).toFixed(2);
        exchangeRateTxt.innerText = `${totalExchangeRate} ${toCurrency.value}`;
        field2.value = exchangeRateTxt.innerText
    }).catch(() =>{
        exchangeRateTxt.innerText = "Something went wrong";
    });
}