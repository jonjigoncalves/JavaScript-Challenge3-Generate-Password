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
// for loop to pull random charaters from the combined array created above
// for loops has 3 parts, the firt is setting a index or count to 0, preventing an infinite loop b using the set index to one less than the length
  for ( var index = 0; index < length; index++ ){
    var randomIndex = Math.floor(Math.random() * charList.length);
    var randomChar = charList[randomIndex];
// is the += to add a value from randomchar (rightside) to the password var that is = to an empty string. so it should keep adding random chars until the index < legnth is proven falsey 
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
  var password = generatePassword(length);
  

  var passwordText = document.querySelector("#password");  
   passwordText.value = password;
}



 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

