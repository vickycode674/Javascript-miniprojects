// game constant and variables

let direction={x:0,y:0};
let foodsound=new Audio('food.mp3');
let gameOverSound = new Audio('gameover.mp3');
let moveSound=new new Audio('move.mp3');
let musicSound=new Audio('music.mp3');

let speed=2;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
]

//game functions
function main(ctime){
    window.requestAnimationFrame(main); 
    if((ctime-lastPaintTime)/1000 < 1/speed){ //to match the current time last used with speed variation
        return;
    }
   
    lastPaintTime=ctime;
    gameEngine(); //changes of the postion
}

function gameEngine(){
    //part 1 updatin the snake variable
    
    //part 2 display the snake and food
    board.innerHTML=""; //we clear out the follwing with free space

    snakeArr.forEach((e,index)=>{
         snakeElement=document.createElement('div');  //converting the following div into snakeelement 
         snakeElement.style.gridRowStart  = e.y;  //yaxis
         snakeElement.style.gridColumnStart  = e.x;  //x axis arranging the columsn    
         snakeElement.classList.add('food')
         board.appendChild(snakeElement);

    })

}






//main logic starts here

window.requestAnimationFrame(main);
