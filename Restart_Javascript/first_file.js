// const expenses = [
//     {item: "Groceries" , amount:300},
//     { item: "Rent", amount: 1200 },
//     { item: "Internet", amount: 60 },
//    { item: "Gym", amount: 50 },
//    { item: "Coffee", amount: 100 }
// ]

// //get all item names from the expenses

// //using reduce
// const totalExpenses = expenses.reduce((acc,curr) =>acc + curr.amount,0);

// //using filter method
// const filterExpenses = expenses.filter(exp=>exp.amount>100)

// // Add new Expense  
// function addExpense(item,amount){
//     expenses.push({item,amount})
//     return  {item,amount}
// }

// //get the entire summary flow
// function getSummary(expenses){
//     const total = expenses.reduce((sum,exp)=>sum+exp.amount,0);
//   return `You spent a total of $${total} on ${expenses.length} items.`;
// }

// console.log("here is teh itenNames=========",totalExpenses,filterExpenses);

// console.log(addExpense('Raju',5900));

// console.log(getSummary(expenses))

// const itemNames = expenses.map(exp=>exp.item);

// console.log("here is teh itenNames=========",itemNames)


const numbers = [5, 12, 8, 20, 7, 3, 15, 10, 6, 9];

//for loop 1
let totalValue = 0;

for (let i=0;i<10;i++){
    totalValue+=numbers[i];
}

// for loop using reduce walah dude 
const totalReduce = numbers.reduce((acc,num)=>acc+num,0); 



console.log("here is the total Value==============",totalValue);