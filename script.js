
// Assignment Code
var generateBtn = document.querySelector("#generate")

var userLength;
var userUpperChar;
var userLowerChar;
var userNumbChar;
var userSpecialChar;
var userChoice;


var wordLength = ['userLowerCase', 'userUpperCase', 'userNumbChar', 'userSpecialChar'];
LowerChars = 'abcdefghijklmnopqrstuvwxyz';
UpperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NumChars = '0123456789';
SpecialChars = '!@#$%^&*()_-+=';

generateBtn.addEventListener('click', writePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
     userLength = prompt('How long would you like your password to be? Must be between 8 and 128 characters.');
      if (userLength < 8 || userLength > 128 )  {
        alert('Characters must be between 8 and 128 characters.');
        return;
      }
      else if (isNaN(userLength)){
        alert('Must input a number.');
      }
      else if (!userLength) {
          return;
        }
      else {
        userLowerChar = confirm('Would you like to include lowercase characters?');
        userUpperChar = confirm('Would you like to add uppercase characters?');
        userNumbChar = confirm('Would you like to include number characters?');
        userSpecialChar = confirm('Would you like to add any special characters? (!@+, etc.)');
      }
        if (userLowerChar === false && userUpperChar === false && userNumbChar === false && userSpecialChar === false) {
        alert ('You must select at least one type of character');
          return;
        }



      }

/*var userLower = confirm('Would you like to include lowercase characters?');
    if (userLower === true){
      wordChars += userLength;
    }
  var userUpper = confirm('Would you like to add uppercase characters?');
    if (userUpper === true){
      wordChars += userUpper;
    }
  var userNumbers = confirm('Would you like to include number characters?');
    if (userNumbers === true){
      wordChars += userNumbers;
    }
  var userSpecial = confirm('Would you like to add uppercase characters?');
    if (userSpecial === true){
      wordChars += userSpecial;
    }
  if (userLower === false && userUpper === false && userNumbers === false && userSpecial === false) {
    alert ('You must select at least one type of character');
      return;
  }
  return;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
writePassword();*/