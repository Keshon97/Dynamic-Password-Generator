
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChars  = 'abcdefghijklmnopqrstuvwxyz';
var upperChars  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberChars  = '0123456789';
var specialChar  = '!@#$%^&*()';




// Write password to the #password input
function writePassword() {
   generateBtn.addEventListener("click", function(){   
    userLength = prompt ('How long would you like your password to be? Must be between 8 and 128 characters.');
    if (userLength < 8) {
      alert('Characters must be at least 8 characters long.')
    }if (userLength > 128) {
        alert('Characters cannot be longer than 128 characters.')
      }if (userLength = NaN){
        alert('Must input a number.');
      }
  //var password = generatePassword();
 // var passwordText = document.querySelector("#password")
  //passwordText.value = password;
});

}
// Add event listener to generate button

writePassword();