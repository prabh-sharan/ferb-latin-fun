
const btnTranslate= document.querySelector("#btn-translate");
const txtInput= document.querySelector("#txt-input");
const outputDiv= document.querySelector("#output");

var urlServer="https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationUrl(input){
    return urlServer + "?" + "text=" + input
}

function errorHandler(error){
    console.log("errorr occurred", error);
    alert("something wrong with server! try again later")
}

// click function
function clickHandler(){
    var inputText= txtInput.value; //take input

    //call server
    fetch(getTranslationUrl(inputText))
      .then(response => response.json())
      .then(json => {
        var translatedText= json.contents.translated;
        outputDiv.innerText=translatedText; 
      })
      .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)
