 // New CODE

// First things first, main variables declared
  var num = "012345678";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!@#$%^&*()_+{}[]:";
  var passwordLength = 8 || 128;
  var passwordLength = (passwordLength);

 var options = []
 
 // User clicks 'generate' button
 var generateBtn = document.querySelector("#generate");
 var generatePassword

 // This is hte event listener
 generateBtn.addEventListener("click", writePassword);

 function confirmGenerate() {
  if (confirm("Do you want to generate a secure password? - Click to go ahead") === true) {
    console.log("Process started!");
  } // ^^^^ will print to console
} 

//all password criteria below within the generate password

 function writePassword() {
 // 1. Password Length
 var passwordLength = prompt("Your new password should contain between 8 - 128 characters. How many would you like?");
//error null if chose outside those parameters ^^
 if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Not valid - please choose a number between 8 - 128");
  passwordLength = prompt("Password Length: select a number between 8-128");
 }

// accepts and prints the console 
if (passwordLength > 8 || passwordLength < 128 || 
    (passwordLength) === true) {
    console.log(passwordLength);
    alert("You have selected a password length of "  + passwordLength + "  characters");
    //include numbers 
    var includeNum = confirm("Would you like to include numbers? Click 'OK' or 'CANCEL'");
    //include special characters
    var includeSpecialChar = confirm("Would you like any special characters? Click 'OK' or 'CANCEL'");
    //include upperCase
    var includeupperCase = confirm("Would you like any special upper case letters? Click 'OK' or 'CANCEL'"); 
    //include lowerCase
    var includelowerCase = confirm("Would you like any special lower case letters? Click 'OK' or 'CANCEL'"); 

  if (!includeNum && !includeSpecialChar && !includeupperCase && !includelowerCase) {
    return alert("Not valid - choose one character of each type at least to proceed");
  }
  } else {
    console.log("Password Generator Cancelled, BYE!");
  }
  var charSet = "";
  if (includelowerCase===true) {
    charSet = charSet + lowerCase;
  }
  if (includeupperCase===true) {
    charSet = charSet + upperCase;
  }
  if (includeNum===true) {
    charSet = charSet + num;
  }
  if (includeSpecialChar===true) { 
    charSet = charSet + specialChar;
  }

  console.log(charSet)

  var retVal = "";
  for (var i = 0; i < parseInt(passwordLength); i++) {
  retVal += charSet[Math.floor(Math.random()*charSet.length)];
  console.log(retVal);
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = retVal;
  }
 