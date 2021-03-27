//reorganized by variables
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var letters1=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var symbols=["!","@","#","$","%","^","&","*"];

var numbers=[0,1,2,3,4,5,6,7,8,9];

var total = []


//created function to generate random characters
function generate () {
    confirm ("Welcome To My Password Generator")
  
  var passwordLenght = prompt("How many characters would you like your password to have? Enter a number between 8 and 128");

  var specialChar = confirm("Would you like to use a special character?");
  var numbersChar = confirm("Would you like to use a number?");
  var lowerChar = confirm("Would you like to use a lower case letter?");
  var upperChar = confirm("Would you like to use an upper case letter?");
 
  if(specialChar){
       total = total.concat(specialChar)
   }
  if(numbersChar){
       total = total.concat(numbersChar)
   }
  if(lowerChar){
       total = total.concat(lowerChar)
   }
  if(upperChar){
       total = total.concat(upperChar)
   }
 
 //the function that creates the random selection
}
function generateRandomPassword(maxValue) {
  var randomNumber=Math.random();

  var result=Math.floor(randomNumber * maxValue);
  return result
}

function getRandomeElementFromArray(array) {

  var randomPosition=generateRandomPassword(array.length);
  return array [randomPosition];
}

console.log(getRandomeElementFromArray());




// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














  













//var passwordText = document.querySelector("#password");

 // passwordText.value = password;






//ar generateBtn = document.querySelector("#generate");

//var generatePassword= prompt ("Generate Password")

//var password= [];
//console.log(getRandomeElementFromArray(password));






//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");

 // passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//function writePassword() {
 // generateBtn.addEventListener("demo").innerHTML = password();
//}