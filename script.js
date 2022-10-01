
// Assignment Code
var generateBtn = document.querySelector("#generate")

var userLength;
var userUpperCase;
var userLowerCase;
var userNumbChar;
var userSpecialChar;

var userChoice;


var wordLength = ['userLowerCase', 'userUpperCase', 'userNumbChar', 'userSpecialChar'];
lowerChars = 'abcdefghijklmnopqrstuvwxyz';
upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
numChars = '0123456789';
specialChars = '!@#$%^&*()_-+=';

generateBtn.addEventListener('click', writePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
     userLength = prompt('How long would you like your password to be? Must be between 8 and 128 characters.');
      if (userLength < 8 || userLength > 128 )  {
        alert('Characters must be between 8 and 128 characters.')
      }
      else if (isNaN(userLength)){
        alert('Must input a number.');
      }
      else if (!userLength) {
          return;
        }
      }

    