// Assignment Code
var generateBtn = document.querySelector("#generate")

userChoice;

var wordLength = ['userLowerCase', 'userUpperCase', 'userNumbChar', 'userSpecialChar'];
userLowerChar = 'abcdefghijklmnopqrstuvwxyz';
userUpperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
userNumChars = '0123456789';
userSpecialChar = '!@#$%^&*()_-+=';

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
          if (userLowerChar = true) {
            userChoice += userLowerChar
          };
        userUpperChar = confirm('Would you like to add uppercase characters?');
        if (userUpperChar = true) {
          userChoice += userUpperChar
        };
        userNumbChar = confirm('Would you like to include number characters?');
        if (userNumbChar =true) {
          userChoice += userNumbChar
        };
        userSpecialChar = confirm('Would you like to add any special characters? (!@+, etc.)');
        if (LowerChars = true) {
          userChoice += userSpecialChar
        };
        if (userLowerChar === false && userUpperChar === false && userNumbChar === false && userSpecialChar === false) {
        alert ('You must select at least one type of character');
        }};

  }

        function writePassword() {
          var password = generatePassword();
          var passwordText = document.querySelector("#password");
          passwordText.value = password;

      }