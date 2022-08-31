// Assignment Code
var generateBtn = document.querySelector("#generate");

var passCriteria = {
  size: 0,
  lowercase: 0,
  uppercase: 0,
  numeric: 0,
  special: 0
}

// Write password to the #password input,
// when button is clicked, this function starts
function writePassword() {
  // calls the prompts once the button is clicked, starting the procedure
  criteriaPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function () {
  var newPass = "";
  for (i = 0; i < passCriteria.size; i++) {
    var charType = randomNumber(1, 4);

    //compare tye new charType and if it is a type of character the user wants, generate a random character from that character set.
    if (charType === 1 && passCriteria.lowercase === 1) {
      newPass += genLowercase();
      console.log(newPass);
    }
    else if (charType === 2 && passCriteria.uppercase === 1) {
      newPass += genUppercase();
      console.log(newPass);
    }
    else if (charType === 3 && passCriteria.numeric === 1) {
      newPass += genNumeric();
      console.log(newPass);
    }
    else if (charType === 4 && passCriteria.special === 1) {
      newPass += genSpecial();
      console.log(newPass);
    }
    //if all else fails, decrement i to throw out this iteration through the loop and try again.
    else i--;

  }
  return newPass;
}
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}
var criteriaPrompts = function () {

  while (passCriteria.size < 8 || passCriteria.size > 128) {
    passCriteria.size = window.prompt("How long should the password be? (8 - 128 characters)")
    if (passCriteria.size < 8 || passCriteria.size > 128) {
      window.alert("Please enter a password size between 8 and 128 characters!");
    }
  }

  while (passCriteria.lowercase === 0 && passCriteria.uppercase === 0 && passCriteria.numeric === 0 && passCriteria.special === 0) {
    var lowercaseConfirm = window.confirm("Would you like to include lowercase letters?");
    if (lowercaseConfirm) {
      passCriteria.lowercase = 1;
    }
    var uppercaseConfirm = window.confirm("Would you like to include uppercase letters?");
    if (uppercaseConfirm) {
      passCriteria.uppercase = 1;
    }
    var numericConfirm = window.confirm("Would you like to include numbers?");
    if (numericConfirm) {
      passCriteria.numeric = 1;
    }
    var specialConfirm = window.confirm("Would you like to include special characters?");
    if (specialConfirm) {
      passCriteria.special = 1;
    }
    if (passCriteria.lowercase === 0 && passCriteria.uppercase === 0 && passCriteria.numeric === 0 && passCriteria.special === 0) {
      window.alert("You must choose at least one type of character to include in your password!");
    }
    console.log(passCriteria);
  }
}
var genLowercase = function () {
  return String.fromCharCode(97 + randomNumber(0, 25));
}

var genUppercase = function () {
  return String.fromCharCode(65 + randomNumber(0, 25));
}

var genNumeric = function () {
  return String.fromCharCode(49 + randomNumber(0, 8));
}

var genSpecial = function () {
  return String.fromCharCode(33 + randomNumber(0, 14));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
