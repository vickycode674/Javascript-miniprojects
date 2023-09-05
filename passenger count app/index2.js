// let errorParagraph=document.getElementById("error") 
// console.log(error) 

// function purchase(){
// console.log("button click")
// errorParagraph.textContent="Something went wrong please try again"
// }
let num1=8
let num2=2

document.getElementById("num-el").textContent=num1
document.getElementById("num2-el").textContent=num2

let sumEl=document.getElementById("sum-el")
function add(){
    result=num1 + num2
    sumEl.textContent="sum:"+ resul
}

function sub(){
       result=num1-num2
    sumEl.textContent="sum:"+ result
}
function divide(){
    result=num1 / num2
    sumEl.textContent="sum:"+ resul
}

function multiply(){
       result=num1*num2
    sumEl.textContent="sum:"+ result
}
