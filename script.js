// Assignment Code

//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();

  function generate () {
    confirm ("Welcome To My Password Generator")
  
  var password = prompt("How many characters would you like your password to have? Enter a number between 8 and 128");
  
}

function generateRandomNumber(maxValue) {
  var randomNumber=Math.random();

  var result=Math.floor(randomNumber * maxValue);
  return result
}


function getRandomeElementFromArray(array) {

  var randomPosition=generateRandomNumber(array.length);
  return array [randomPosition];
}

var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


console.log(getRandomeElementFromArray(letters));

function getRandomeElementFromArray(array) {

  var randomPosition=generateRandomNumber(array.length);
  return array [randomPosition];
}

var letters1=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

console.log(getRandomeElementFromArray(letters1));

function getRandomeElementFromArray(array) {

  var randomPosition=generateRandomNumber(array.length);
  return array [randomPosition];
}

var symbols=["!","@","#","$","%","^","&","*"];

console.log(getRandomeElementFromArray(symbols));

function getRandomeElementFromArray(array) {

  var randomPosition=generateRandomNumber(array.length);
  return array [randomPosition];
}

var numbers=[0,1,2,3,4,5,6,7,8,9];

console.log(getRandomeElementFromArray(numbers));








//ask for character type
//var charType = confirm("Click OK to confirm including upper case characters");
//var charType = confirm("Click OK to confirm including lower case characters");
//var charType = confirm("Click OK to confirm including numeric characters");
//var charType = confirm("Click OK to confirm including special characters")



  













//var passwordText = document.querySelector("#password");

 // passwordText.value = password;






//ar generateBtn = document.querySelector("#generate");
//var generatePassword= confirm ("Hello there!, please make sure your password is between 8 to 128 characters");
///var generatePassword= confirm ("Also be sure to include at least one uppercase,lowercase,numeric, or special character");
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

