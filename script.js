const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const theOperators = ["%","*","+","-","/","="];

let theResult = "";

const calculate = (buttonVal) => {
    if(buttonVal === "=" && theResult !== ""){
        theResult = eval(theResult.replace("%", "/100"));
    }else if(buttonVal === "AC"){
        theResult = ""
    }else if(buttonVal === "DE"){
        theResult = theResult.toString().slice(0, -1);
    }else{
        if(theResult ==+ "" && theOperators.includes(buttonVal)) return;
        theResult += buttonVal;
    }
    display.value = theResult;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
});