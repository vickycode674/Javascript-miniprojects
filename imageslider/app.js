const slides=document.querySelectorAll(".slide");  //created usuable format for class

var counter=0;

slides.forEach(                 //for loop for multiple images
    (slide,index)=>{             //here slide represent images and index refers its postion
        slide.style.left=`${index*100}%`   //we are moving image postion to 100--200--+100x
        // slide.style.top=`${index*100}%`   //we are moving image postion to 100--200--+100x

    }
)

const slideImage  =()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)` //for each image it moves its axis
        }
)};

const goPrev=()=>{
    if(counter==0){
        counter=slides.length-1;
        slideImage();
    }
    else{
    counter--;
    slideImage();
    }
}

const goNext=()=>{
    if(counter==slides.length-1){
    counter=0;
    slideImage();
    }
    counter++;
    slideImage();
}