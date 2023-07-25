const form = document.querySelector('form');

form.addEventListener('submit',function(e){
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if(height < 0 || height===''|| isNaN(height)){
results.innerHTML = `Please give a valid Height ${height}`;
} 
else if(weight<0 || weight>100 || weight===''|| isNaN(weight)){
    results.innerHTML = `Please give a valid Height ${weight}`;
    }
else{
  const bmiRes =  (weight/((height*height)/10000)).toFixed(2);

//   results.innerHTML = `<span>${bmiRes}</span>`;


  if(bmiRes<18.6){
    results.innerHTML=`Need to increase your food Intake,YOUR BMI :- ${bmiRes}`
  }
  else if(bmiRes>18.6 && bmiRes<24.6){
    
    results.innerHTML=` keep it up you are fit and healthy,Your BMI :- ${bmiRes} `
  }
  else{
    results.innerHTML=`Need to decrease your food Intake, YOUR BMI :- ${bmiRes}`
  }
 
}


});