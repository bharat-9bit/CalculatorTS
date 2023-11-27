var number1 = document.querySelector("#num1");
var number2 = document.querySelector("#num2");
var addBtn = document.querySelector("#add");
var subBtn = document.querySelector("#Substraction");
var multitn = document.querySelector("#Multiply");
var divideBtn = document.querySelector("#Divide");
var printResult = document.querySelector("#result");
function AddNum() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
addBtn.addEventListener("click", AddNum);
function SubNum() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
subBtn.addEventListener("click", SubNum);
function MultiNum() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printResult.textContent = result.toString();
}
multitn.addEventListener("click", MultiNum);
function DivideNum() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printResult.textContent = result.toString();
}
divideBtn.addEventListener("click", DivideNum);
