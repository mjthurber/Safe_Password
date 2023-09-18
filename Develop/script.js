// Assignment Code
var button = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  // Get a reference to the button element
  var button = document.getElementById("#generate");
}
  // Add a click event listener to the button
  button.addEventListener('click', function() {
      // Use the prompt function to create a prompt dialog
      var numChar = prompt('How many characters do you want?');
      
      // Check if the user clicked "OK" and entered some text
      if (numChar !== null || numChar <8 || numChar) {
          // Display the user's input in the console
          var lowCase = prompt('Include lowercase? (Y/N)')
          if (lowCase = "Y") {
            var uppCase = prompt('Include uppercase? (Y/N)')
          }
      } else {
          console.log('No input provided');
      }
  });
  /*passwordText.value = password;

  var numCharacters = window.prompt("How many characters do you want")

  if (!numCharacters && numCharacters < 8 && numCharacters > 128) {
    return; */




// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//Prompt to ask how many characters
//If <8 or >128, then Error message, otherwise store the number of characters as var
//Prompt to ask to include lowercase
//If no, then error message
//Prompt to ask to include uppercase
//If no, then error message
//Prompt to ask to include numeric characters
//If no, then error message
//Prompt to ask to include special characters
//If no, then error message


        // Function to show the prompts when the button is clicked
        /*document.getElementById("generate").addEventListener("click", function () {
            showPrompts();
        });

        // Function to display prompts and collect user input
        function showPrompts() {
            const promptContainer = document.getElementById("prompt-container");
            promptContainer.style.display = "block";

            let userData = {}; // Object to store user input

            // Prompt 1: Ask for the user's name
            const name = window.prompt("What's your name?");
            userData.name = name;

            // Prompt 2: Ask for the user's age
            const age = window.prompt("How old are you?");
            userData.age = age;

            // Prompt 3: Ask for the user's email
            const email = window.prompt("What's your email address?");
            userData.email = email;

            // Prompt 4: Ask for additional information
            const additionalInfo = window.prompt("Any additional information you'd like to share?");
            userData.additionalInfo = additionalInfo;

            // Display the collected user data
            console.log("User Data:", userData);

            // Hide the prompts
            promptContainer.style.display = "none";


//create a loop, randomly selecting characters, only stopping until remaining number of characters is 0
//if above loop is does not contain either uppercase, lowercase, numeric, special characters, repeat loop until it does
//  else store the results of the loop as text
//display text within the box in the viewport*/



