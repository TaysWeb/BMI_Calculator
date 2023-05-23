function determine () {
//need to determine the constant of same id function

let bmi ;
let outcome =  document.getElementById("outcome");
 
//storing the weight in a variable and parsing it as a number 

let weight = parseInt(document.getElementById("weight").value) ;
let height = parseInt(document.getElementById("height").value) ;

documents.getElementById("wValue").value = weight + "kg" ;

documents.getElementById("hValue").value = height + "cm" ;

//calculating the bmi 

bmi =(weight/Math.pow(height/100,2)).toFixed(1);
outcome.value = bmi ;

if (bmi < 18.5) {
     outcome = "You are underweight 🙂➕" ; 
}else if (bmi >= 18.5 && bmi <= 24.9) {
    outcome = "You are within Normal Weight 👌🙌" 
}else if (bmi >= 25.88 && bmi <= 29.9) {
      outcome = "Your Overweight love.🙁"
}else {
    outcome = "ObiCity Angel . You can overcome it🥺"
}
  document.getElementById("outcome").textContent = outcome ;

}

