const getColor=()=>{
//hex code
const randomNumber=Math.floor(Math.random()*16777215);

const randomCode="#"+randomNumber.toString(16); //hex code transfomration
console.log(randomNumber);
console.log(randomCode);
document.body.style.backgroundColor=randomCode;

document.getElementById('color-code').innerText=randomCode;

navigator.clipboard.writeText(randomCode);  //automatic code is copied in textfile
}

//event call
document.getElementById("btn").addEventListener(  //during a event is function
"click",
getColor
)
//refresh call
getColor();