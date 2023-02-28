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
 generateBtn.addEventListener("click", generatePassword);

 function confirmGenerate () {
  var generatePassword 
  if (confirm("Do you want to generate a secure password? - Click to go ahead") === true) {
    console.log("Process started!");
  } // ^^^^ will print to console
    

//all password criteria below within the generate password

 function confirmGenerate() {}
 // 1. Password Length
 var passwordLength = prompt("Your new password should have between 8 - 128 characters. How many would you like?");
//error null if chose outside those parameters ^^
 if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Not valid - please choose a number between 8 - 128");
  prompt("Password Length: select a number between 8-128");
 }

// accepts and prints the console 
if (passwordLength > 8 || passwordLength < 128 || 
  (passwordLength) === true) {
    console.log(passwordLength);
    alert("You have selected a password length of "  + passwordLength + "  characters");
    //include numbers 
    var includeNum = confirm("Would you like to include numbers? Click 'Yes' or 'No'");
    //include special characters
    var includeSpecialChar = confirm("Would you like any special characters? Click 'Yes' or 'No'");
    //include upperCase
    var includeupperCase = confirm("Would you like any special upper case letters? Click 'Yes' or 'No'"); 
    //include lowerCase
    var includelowerCase = confirm("Would you like any special lower case letters? Click 'Yes' or 'No'"); 

  if (!includeNum && !includeSpecialChar && !includeUppercase && !includelowercase) {
    return alert("Not valid - choose one character of each type at least to proceed");
  }
  } else {
    console.log("Password Generator Candelled, BYE!");
  }
 }

// {
//   var charSet = "";
//   if (Low===true) {
//     charSet = charSet + charTypes.lowerCase;
//   }
//   if (Upp===true) {
//     charSet = charSet + charTypes.upperCase;
//   }
//   if (hasNumbers===true) {
//     charSet = charSet + charTypes.numeric;
//   }
//   if (hasSpecialCharacters===true) { 
//     charSet = charSet + charTypes.special;
//   }

//   var retVal = "";
//   for (var i = 0; i < parseInt(password.Length); i++) {
//   retVal += charSet[Math.floor(Math.random()*charSet.lenght)];
//   console.log(retVal);
//   }

//   return retVal;
// }