function determine () {
//need to determine the constant of same id function

let bmi = 0 ;
let outcome =  document.getElementById("outcome");
 
//storing the weight in a variable and parsing it as a float 

let weight = parseFloat(document.getElementById("weight").value) ;
let height = parseFloat(document.getElementById("height").value) ;

//calculating the bmi 

bmi =(weight/Math.pow(height/100,2)).toFixed(1);
outcome.value = bmi ;

 if (bmi < 18.5) {
     outcome = "You are underweight 🙂➕" ; 
}else if (bmi >= 18.5 && bmi <= 24.9) {
    outcome = "You are within Normal Weight 👌🙌" ;
}else if (bmi >= 25.88 && bmi <= 29.9) {
      outcome = "Your Overweight love.🙁";
}else {
    outcome = "ObeCity Angel . You can overcome it🥺" ;
}

  document.getElementById("outcome").textContent = outcome ;

}



   function reset() {
   document.getElementById("weight").value =  " "  ;
   document.getElementById("height").value =  " "  ;
   document.getElementById("outcome").textContent =  " "  ;
   }



