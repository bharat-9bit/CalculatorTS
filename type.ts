const number1= document.querySelector("#num1") as HTMLInputElement
const number2 = document.querySelector("#num2") as HTMLInputElement

const addBtn = document.querySelector("#add") as HTMLButtonElement
const subBtn = document.querySelector("#Substraction") as HTMLButtonElement
const multitn = document.querySelector("#Multiply") as HTMLButtonElement
const divideBtn = document.querySelector("#Divide") as HTMLButtonElement

const printResult = document.querySelector("#result") as HTMLOutputElement

function AddNum():void{
    let a= parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a+b;
    printResult.textContent = result.toString();
}
addBtn.addEventListener("click",AddNum);

function SubNum():void{
    let a= parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a-b;
    printResult.textContent = result.toString();
}
subBtn.addEventListener("click",SubNum);

function MultiNum():void{
    let a= parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a*b;
    printResult.textContent = result.toString();
}
multitn.addEventListener("click",MultiNum);

function DivideNum():void{
    let a= parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a/b;
    printResult.textContent = result.toString();
}
divideBtn.addEventListener("click",DivideNum);