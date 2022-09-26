// DOM elements
var generatePassword = function () {
    var passLength = 0;
    var fullPassword = "";
    var lowercase = "abcdefghijklmnnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNNOPQRSTUVWXYZ";
    var numeric = "123456789";
    var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  
    // prompt for password length/check for length
    do {
      passLength = window.prompt("How many characters would you like? Minimum of 8 and Maximum of 128");
      // creating expression to see if passLength is not a number
      if (passLength < 8 || passLength > 128) {
        // alerts uers if entry is not between 8 and 128
        alert("You must enter in a number between 8 and 128!");
      }
    } while (passLength < 8 || passLength > 128);
  
    do {
      // prompt for password criteria
      var lowercaseEl = window.confirm("Would you like to include lowercase letters?")
      var uppercaseEl = window.confirm("Would you like to include uppercase letters?")
      var numberEl = window.confirm("Would you like to include numbers?")
      var symbolsEl = window.confirm("Would you like to include special characters?")
    
  
      // add selected criteria to password pool 
      if (lowercaseEl) {
        fullPassword += lowercase
      }
  
      if (uppercaseEl) {
        fullPassword += uppercase
      }
  
      if (numberEl) {
        fullPassword += numeric
      }
  
      if (symbolsEl) {
        fullPassword += special
      }
      if (!lowercaseEl && !uppercaseEl && !numberEl && !symbolsEl) {
        window.alert("You must select at least one criteria.")
      }
    } while (!lowercaseEl && !uppercaseEl && !numberEl && !symbolsEl)
    console.log(fullPassword)
  
  
    // generate password from selected criteria
    var newPass = "";
    for (var i = 0; i < passLength; i++) {
      newPass += fullPassword[Math.floor(Math.random() * fullPassword.length)]
    }
    console.log(newPass)
    return newPass;
  };
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);