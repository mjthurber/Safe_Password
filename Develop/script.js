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
    var numChar = parseInt(prompt('How many characters do you want?'));

    if (isNaN(numChar) || numChar < 8 || numChar > 128) {
        alert('Please enter a valid number between 8 and 128 characters.');
        return;
    }

    var lowCase = prompt('Include lowercase? (Y/N)');
    if (lowCase === null) return;

    lowCase = lowCase.toUpperCase();

    if (lowCase !== 'Y') {
        alert('Please enter Y for Yes.');
        return;
    }

    var uppCase = prompt('Include uppercase? (Y/N)');
    if (uppCase === null) {
        alert('Please enter Y for Yes or N for No.');
        return;
    }
    uppCase = uppCase.toUpperCase();
    if (uppCase !== 'Y' && uppCase !== 'N') {
        alert('Please enter Y for Yes or N for No.');
        return;
    }

    var num = prompt('Include numbers? (Y/N)');
    if (num === null) {
        alert('Please enter Y for Yes or N for No.');
        return;
    }
    num = num.toUpperCase();
    if (num !== 'Y' && num !== 'N') {
        alert('Please enter Y for Yes or N for No.');
        return;
    }

    var specChar = prompt('Include special characters? (Y/N)');
    if (specChar === null) return;
    specChar = specChar.toUpperCase();
    if (specChar !== 'Y') {
        alert('Please enter Y for Yes.');
    } else {

        function generateRandomPassword(length) {
            const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
            const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const numbers = '0123456789';
            const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
      
            const allChars = lowerCaseChars + upperCaseChars + numbers + specialChars;
            let password = '';
      
            if (length < 4) {
              return 'Password length must be at least 4 characters.';
            }
      
            for (let i = 0; i < length; i++) {
              const randomIndex = Math.floor(Math.random() * allChars.length);
              password += allChars[randomIndex];
            }
      
            return password;
          }
      return;
    }

      
      // Get user input for password numChar
      const passwordnumChar = parseInt(prompt('Enter the desired password numChar:'));
      
      // Generate and display the random password
      const generatedPassword = generateRandomPassword(passwordnumChar);
      
      if (generatedPassword !== 'Password numChar must be at least 4 characters.') {
        console.log('Generated Password:', generatedPassword);
      } else {
        console.log('Invalid password numChar.')
        window.alert(generatedPassword);
      }
    // At this point, you have collected the user's preferences for generating the password.
    // You can now generate the password based on these preferences.
});

    // Now you have the user's input for generating the password
    // You can proceed with generating the password based on the input

   
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



