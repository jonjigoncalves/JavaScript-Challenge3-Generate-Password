// Create array to generate pasword
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', ']', '{', '}', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/'];

// Create Funtion taht will get the amount of characters and returns a list of them
function generatePassword (){
  var amount = Number(prompt('Please Provide an Amount'));
  var includeLowercase = confirm('Click OK to include lowercase letters');
  var includeUppercase = confirm('Click OK to include uppercase letters');
  var includeSpecial = confirm ('Click ok to include special characters?');
  var includeNumbers = confirm('click ok if you want numbers');

  return [amount, includeLowercase, includeUppercase, includeSpecial, includeNumbers];
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pass = '';
  var password = generatePassword();
  var amount = password [0];
  var includeLowercase = password [1];
  var includeUppercase = password [2];
  var includeSpecial = password [2];
  var includeNumbers = password [3];
  var allpossible
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
