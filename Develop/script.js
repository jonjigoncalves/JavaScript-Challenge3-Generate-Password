// Create array to generate pasword and create a function for the length
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', ']', '{', '}', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/'];

var combined = lowercase.concat(uppercase).concat(numbers).concat(specialCharacters);
// function for length
function generatePassword(length){
  var charList = combined
  var password = ''; 
// for loop to pull random charaters from array
  for ( var index = 0; index < length; index++ ){
    var randomIndex = Math.floor(Math.random() * charList.length);
    var randomChar = charList[randomIndex];

    password += randomChar;
  }
return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // create a var for the legnth,
  var length =combined.length;
   var password = generatePassword(length);
    console.log (password);

  var passwordText = document.querySelector("#password");  
   passwordText.value = password;
}



 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

