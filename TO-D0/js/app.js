const item=document.querySelector("#item")
const toDoBox= document.querySelector("#to-do-box")


item.addEventListener(
    "keyup", //during if any writing text ivolves
 
  function(event){
    if(event.key=="Enter"){
     addToDo(this.value)//frowarding the value forwards  
    this.value=""  //refreshes value
    }
  }
)


const addToDo=(item) =>{
const listItem=document.createElement("li");
listItem.innerHTML=`
${item}
<i class="fas fa-times"></i>
`;

listItem.addEventListener(
    "click",
    function() {
        this.classList.toggle("done");
    }
)
listItem.querySelector("i").addEventListener(
    "click",
    function() {
        listItem.remove()
    }
)



toDoBox.appendChild(listItem)
}


