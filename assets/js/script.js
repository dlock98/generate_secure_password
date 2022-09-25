// DOM elements
var generatePassword = function () {
    var passlength = 0;
    var charSet = "";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
    var numeric = "123456789";
    var special = "!@#$%^&*()-_=+{}[]|,.`~";

    do {
        passLength = window.prompt("How many characters would you like? Must have minimum of 8 and Maximum of 128?");
        if (passLength < 8 || passlength > 128) {
            alert("You must enter in a number between 8 and 128!");
        }
    } while (passlength < 8 || passlength > 128);

do {
    var lowercaseEl = window.confirm("Would you like to include lowercase letters?")
    var uppercaseEl = window.confirm("Would you like to include uppercase letters?")
    var numbersEl = window.confirm("Would you like to include numbers?")
    var symbolsEl = window.confirm("Would you like to include special characters?")

    if (lowercaseEl) {
        charSet += lowercase
    }

    if (uppercaseEl) {
        charSet += uppercase
      }
  
    if (numbersEl) {
        charSet += numeric
      }
  
    if (symbolsEl) {
        charSet += special
      }
    
    if (!uppercaseEl && !lowercaseEl && !numbersEl && !symbolsEl) {
        window.alert ("You must select at least one criteria")
    }
    } while (!uppercaseEl && !lowercaseEl && !numbersEl && !symbolsEl)
    console.log(charSet)

    var newPass = "";
    for (var i = 0; i < passlength; i++) {
        newPass += charSet[Math.floor(Math.random() * charSet.length)]
    }
    console.log(newPass)
    return newPass;
};

    var generateBtn = document.querySelector("#generate");

    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
    }

    generateBtn.addEventListener("click", writePassword);