{/* <div id="joke" class="joke">Awesome Joke is loading ...
        <button id="jokeBtn" class="btn">Next Joke</button>
    </div> */}

    // Promise USES HERE 

    // 2 conditions in  these either he can fail or success 

    // GET https://icanhazdadjoke.com/

    const jokes=document.querySelector("#joke");
    const jokeBtn=document.querySelector("#jokeBtn");

    const generateJokes =async()=>{
    try{
    const setHeader={
        headers: {
            Accept: "application/json"
        }
    }

    const res=await fetch("https://icanhazdadjoke.com",setHeader);  //async function awaiting
    const data= await res.json();
    jokes.innerHTML=data.joke;  //simple process without then and data as arguments
  }catch(err){
    console.log(`the error is ${err}`)
  }

}
    // .then((res)=>{
    //    return res.json();
    // })
    // .then ((data)=>{
    //     jokes.innerHTML= data.joke;
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })

    jokeBtn.addEventListener('click',generateJokes); 
    generateJokes();//add clicking event