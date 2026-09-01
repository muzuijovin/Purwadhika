/*
Create a function to calculate Body Mass Index (BMI) 
● Formula : BMI = weight (kg) / (height (meter))² 
● Parameters : weight & height 
● Return values : 
  ○ < 18.5 return “less weight” 
  ○ 18.5 - 24.9 return “ideal” ○ 25.0 - 29.9 return “overweight” 
  ○ 30.0 - 39.9 return “very overweight” 
  ○ > 39.9 return “obesity
*/

function beratBadan(weight, height) {
  let bodyMassIndex = weight / (height ** 2);
  if (bodyMassIndex < 18.5) {
    console.log("less weight");
  } else if (18.5 <= bodyMassIndex <= 24.9) {
    console.log("ideal");
  } else if (30.0 <= bodyMassIndex <= 39.9) {
    console.log("very overweight");
  } else if (bodyMassIndex > 39.9) {
    console.log("obesity");
  }
}

beratBadan(50, 170);
