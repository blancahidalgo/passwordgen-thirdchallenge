
  // New CODE
  var generateBtn = document.querySelector("#generate");

  function writePassword () {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

  generateBtn.addEventListener("click", writePassword);

  function generatePassword () {
    var passwordLength = prompt("Please choose the length of your password - between 8-128 characters");
    if (passwordLength <8 || passwordLength >128) {
      alert("Error - password must be between 8 and 128 charcters long");
      return null;
    }
  }

  var Low = confirm ("Confirm if you want lower-case characters");
  var Upp = confirm ("Confirm if you want upper-case characters");
  var hasNumbers = confirm ("Confirm if you want numbers");
  var specialCharacters = confirm ("Confirm if you want special characters");
  if (Low===false && Upp===false && hasNumbers===false && specialCharacters===false) {
    alert ("Error - please don't miss out on at least one selection");
    return null;
  }

  // var charTypes = { 
  // var num = "012345678";
  // var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  // var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // var specialChar = "!@#$%^&*()_+{}[]:;"
  // var passwordLength = 8 || 128
  // var length = (passwordLength)
  // }
{
  var charSet = "";
  if (Low===true) {
    charSet = charSet + charTypes.lowerCase;
  }
  if (Upp===true) {
    charSet = charSet + charTypes.upperCase;
  }
  if (hasNumbers===true) {
    charSet = charSet + charTypes.numeric;
  }
  if (hasSpecialCharacters===true) { 
    charSet = charSet + charTypes.special;
  }

  var retVal = "";
  for (var i = 0; i < parseInt(password.Length); i++) {
  retVal += charSet[Math.floor(Math.random()*charSet.lenght)];
  console.log(retVal);
  }

  return retVal;
}