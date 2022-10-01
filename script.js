// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerChar = 'abcdefghiklmnopqrstuvwxyz'
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbChar = '0123456789';
var specialChar = '!@#$%^&*()_-+=';
var userChoice = '';

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
          var userLowerChar = confirm('Would you like to include lowercase characters?');
          if (userLowerChar) {
            userChoice += lowerChar
          };
          var userUpperChar = confirm('Would you like to add uppercase characters?');
          if (userUpperChar) {
            userChoice += upperChar
          };
          var userNumbChar = confirm('Would you like to include number characters?');
          if (userNumbChar) {
            userChoice += numbChar
          };
          var userSpecialChar = confirm('Would you like to add any special characters? (!@+, etc.)');
          if (userSpecialChar) {
            userChoice += specialChar
            };
          if (userLowerChar === false && userUpperChar === false && userNumbChar === false && userSpecialChar === false) {
            alert ('You must select at least one type of character');
          }
        }
      var newPassword = '';
        for (var i = 0; i < userLength; i++) {
          newPassword += userChoice.charAt(Math.floor(Math.random() * userChoice.length));
        }
        return newPassword;
      }


  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  generateBtn.addEventListener('click', writePassword);