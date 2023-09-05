// const question =[
// {
// 'que':"which of the following is a markup language",
// 'a':'HTML',
// 'b':'CSS',
// 'c':'Javascript',
// 'd':'PHP',
// 'correct':'a'
// },

// {
//     'que':"What was the year Javascript was launched?",
//     'a':"1996",
//     'b':"1995",
//     'c':"1994",
//     'd':"none of the above",
//     'correct':"b",
//     },

// {
//         'que':"What does the CSS stands for",
//         'a':'Hyper text markup language',
//         'b':'Cascading Style Sheet',
//         'c':'Javascript object Notation',
//         'd':'PHP',
//         'correct':'b',
//     }
// ]

//     let index=0;
//     const quesbox=document.getElementById("quesBox");
//     const optionInputs=document.querySelector('.options')
    
  
//     const loadquestion=()=>{
//         if(index===total){
//             return endQuiz()
//         }
//         reset();
//     const data=question[index]
//     quesbox.innerText=`${index+1}  ${data.que}`;
//     optionInputs[0].nextElementSibling.innerText=data.a;
//     optionInputs[1].nextElementSibling.innerText=data.b;
//     optionInputs[2].nextElementSibling.innerText=data.c;
//     optionInputs[3].nextElementSibling.innerText=data.d;
//     }

// const submitQuiz=() =>  {
//     const data=question[index];
// const ans=getAnswer()
// if(ans===data.correct){
// right++;
// }
//  else{
//    wrong++;
//  }
//  index++;
//  loadquestion();
//  return;
// }

// const getAnswer=()=>{
// optionInputs=forEach(
//     (input)=>{
//       if(input.checked){
//         return input.value;
//       }
//       else{
//        console.log("No");
//       }
//     }
// )
// }

// const reset=()=>{
// optionInputs.forEach(
//     (input)=>{
//      input.checked=false;
//       }
//    )
//     }

// const endQuiz=()=>{
// document.getElementById("box").innerHTML=`<h3>Thank you for palying</h3>`
// }


// //intial call

// loadquestion();


const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
