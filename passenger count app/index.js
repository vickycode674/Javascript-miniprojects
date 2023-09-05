

//making website interactive using js
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el") 

//var to store element by id

// console.log(saveEl)


//inner text vs text content

// text content shows all the things in script but innertext provide human shown element like -,
let count=0 //incrementing of required numbers

function increment(){
count=count+1
countEl.textContent=count
}

function save(){
let countStr=count + " - "
saveEl.textContent+=countStr
countEl.textContent=0
count=0
}

// var string="You have three new variables"

// let message="jai balllaya"

// let combi=string+ "," +message

// console.log(combi)

// var myname="chengalapattu vivek sai"
// var greeting="Welcome back"
// var mygreeting=greeting + " " + myname

// console.log(mygreeting)

