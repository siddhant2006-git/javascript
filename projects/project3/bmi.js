
const forms=document.querySelector("form")

// this usecase is empty 
// const weight=parseInt(document.querySelector("#weight").value)



forms.addEventListener("submit",function(event){
    event.preventDefault();

  const height= parseInt(document.querySelector("#height").value);
const weight=parseInt(document.querySelector("#weight").value);


const result=document.querySelector("#result");

if(height==='' || height<0 || isNaN(height)){
    result.innerHTML=`please give is valid height ${height}`;
}
else if(weight==="" || weight<0 || isNaN(weight)){
  result.innerHTML=`please give the valid value weight ${weight}`;
}
else{

const bmi=(weight/((height * height)/10000)).toFixed(2);
// result 
result.innerHTML=`<span>${bmi}</span>`;}


});