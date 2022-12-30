const btnTranslate= document.querySelector("#btn-translate");
const txtInput= document.querySelector("#txt-input");
const outputDiv= document.querySelector("#output");

var urlServer="https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationUrl(input){
    return urlServer + "?" + "text=" + input
}

function errorHandle(error){
    console.log("errorr occurred", error);
    alert("something wrong with server! try again later")
}