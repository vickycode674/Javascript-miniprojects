const formOpenBtn = document.querySelector("#form-open"), //opening form
  home = document.querySelector(".home"),  //taking home
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"); //hiding passwrod

  formOpenBtn.addEventListener("click", () => home.classList.add("show")); //while clicking opn btw show 
  formCloseBtn.addEventListener("click", () => home.classList.remove("show"));


  signupBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.add("active");  //this activates the sign up form
  });

  loginBtn.addEventListener("click",(e)=>{   //when we click the login button it removes sign up one
    e.preventDefault();
    formContainer.classList.remove("active"); 
  })

  pwShowHide.forEach((icon)=>{            //hiding passwrod icon chagnes if password 
    icon.addEventListener("click",()=>{
        let getPwInput=icon.parentElement.querySelector("input")
        if(getPwInput.type==="password"){                //if the passwrod is ther then it can show
            getPwInput.type="text"; 
            icon.classList.replace("uil-eye-slash","uil-eye"); //tailwind css icons ra ungama
        }
        else{
            getPwInput.type="password"  //this agains shows passwrod after clicked
            // getPwInput.type="text"; 
            icon.classList.replace("uil-eye","uil-eye-slash")
        }
    })
  })