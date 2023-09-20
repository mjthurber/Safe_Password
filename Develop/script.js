// Assignment Code
var button = document.querySelector("#generate");

// Get a reference to the password input field
var passwordText = document.querySelector("#password");

// Function to generate a random password
function generateRandomPassword(length) {
    //sets the available characters in the password
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allChars = lowerCaseChars + upperCaseChars + numbers + specialChars;
    
    //clears the password
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}

// Add a click event listener to the button
button.addEventListener('click', function() {
    var numChar = prompt('How many characters do you want?');

    // stops program if the number of characters selected isn't a number or not between 8-128 
    if (isNaN(numChar) || numChar < 8 || numChar > 128) {
        alert('Please enter a valid number between 8 and 128 characters.');
        return;
    }
    // stops program if user doesn't want to include any of the character types
    var lowCase = prompt('Include lowercase? (Y/N)');
    lowCase = lowCase.toUpperCase();

    if (lowCase !== 'Y') {
        alert('Please enter Y for Yes to ensure a secure password.');
        return;
    }

    var uppCase = prompt('Include uppercase? (Y/N)');
    uppCase = uppCase.toUpperCase();

    if (uppCase !== 'Y') {
        alert('Please enter Y for Yes to ensure a secure password.');
        return;
    }

    var num = prompt('Include numbers? (Y/N)');
    num = num.toUpperCase();

    if (num !== 'Y') {
        alert('Please enter Y for Yes to ensure a secure password.');
        return;
    }

    var specChar = prompt('Include special characters? (Y/N)');
    specChar = specChar.toUpperCase();

    if (specChar !== 'Y') {
        alert('Please enter Y for Yes to ensure a secure password.');
        return;
    }

    // Generate and display the random password based on the number of characters selected
    const generatedPassword = generateRandomPassword(numChar);

    passwordText.value = generatedPassword;
});
 