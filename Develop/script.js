// Create array to generate pasword and create a function for the length
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', ']', '{', '}', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/'];

var combined = lowercase.concat(uppercase).concat(numbers).concat(specialCharacters);
// function for length
function getUserInput (){  
  var amount = Number(prompt('Please Provide an Amount'));
  var includeLowercase = confirm('Click OK to include lowercase letters');
  var includeUppercase = confirm('Click OK to include uppercase letters');
  var includeSpecial = confirm ('Click ok to include special characters?');
  var includeNumbers = confirm('click ok if you want numbers');

  return [amount, includeLowercase, includeUppercase, includeSpecial, includeNumbers];
}

function generatePassword(){
  var password = '';
  var choices = getUserInput();
  var includeLowercase = choices [1];
  var includeUppercase = choices[2];
  var includeSpecial = choices [3];
  var includeNumbers = choices [4];
  var charAmount = choices [0];
  var allpossiblechars = [];

  if (includeLowercase) {
    allpossiblechars = allpossiblechars.concat(lowercase);
    // console.log (allpossiblechars);
  }

  if (includeUppercase) {
    allpossiblechars = allpossiblechars.concat(uppercase);
  
  }
  if (includeSpecial) {
    allpossiblechars = allpossiblechars.concat(specialCharacters);
   
  }
  if (includeNumbers) {
    allpossiblechars = allpossiblechars.concat(numbers);
    
  }
// for loops consists of three parts  the inital (where you name a varaiable, then the CSSConditionRule, then the increment)
for ( var count = 0; count < charAmount; count++) {
//next step is to grab a random character from the allpossible chars array 
var randomNum = Math.random();
var randomIndex = Math.floor (randomNum * allpossiblechars.length);
var randomChar = allpossiblechars [randomIndex];


password += randomChar;
}
return password; 

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // create a var for the legnth of the combined array, because the charlist is located inside the generatePassword function and cant be used outside of it unless defined in the global area.
  var length =combined.length;
  var password = generatePassword();
  

  var passwordText = document.querySelector("#password");  
   passwordText.value = password;
}



 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

