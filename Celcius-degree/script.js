const calculateTemp=()=>{

    const numberTemp=document.getElementById('temp').value;
    // console.log(numberTemp);
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value; //inside the options of array of the follwong
    console.log(valueTemp);

const celToFah=(cel)=>{
    let Fahranheit=Math.round((cel*9/5)+32);
    return Fahranheit;
}

const fehToCel=(fehr)=>{
    let celcius=Math.round((fehr-32)*5/9);
    return celcius;
}
let result;

if(valueTemp=='cel'){
    result=celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML=`${result} Fahranheit`;
}
else{
    result=fehToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML=`${result} celcius`;

}


}