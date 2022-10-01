// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerChar = 'abcdefghiklmnopqrstuvwxyz'
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbChar = '0123456789';
var specialChar = '!@#$%^&*()_-+=';
var userChoice = '';

//Function to define generate password
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
      //If user answers  the prompt correctly, the following code will run.
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
            //If user does not give at least one parameter, they are stopped here and will need to start over.
          if (userLowerChar === false && userUpperChar === false && userNumbChar === false && userSpecialChar === false) {
            alert ('You must select at least one type of character');
          }
        }
        // Variable to assign our new password. Left empty so it can be assigned after the for loop.
      var newPassword = '';
      //Genertates a random password each time the previous condition are met and exectued.
        for (var i = 0; i < userLength; i++) {
          newPassword += userChoice.charAt(Math.floor(Math.random() * userChoice.length));
        }
        //will display new password.
        return newPassword;
      }
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  generateBtn.addEventListener('click', writePassword);