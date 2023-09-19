// Assignment Code
var button = document.querySelector("#generate");

// Get a reference to the password input field
var passwordText = document.querySelector("#password");

// Function to generate a random password
function generateRandomPassword(length) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allChars = lowerCaseChars + upperCaseChars + numbers + specialChars;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}

// Add a click event listener to the button
button.addEventListener('click', function() {
    var numChar = parseInt(prompt('How many characters do you want?'));

    if (isNaN(numChar) || numChar < 8 || numChar > 128) {
        alert('Please enter a valid number between 8 and 128 characters.');
        return;
    }

    var lowCase = prompt('Include lowercase? (Y/N)');
    lowCase = lowCase.toUpperCase();

    if (lowCase !== 'Y' && lowCase !== 'N') {
        alert('Please enter Y for Yes or N for No.');
        return;
    }

    var uppCase = prompt('Include uppercase? (Y/N)');
    uppCase = uppCase.toUpperCase();

    if (uppCase !== 'Y' && uppCase !== 'N') {
        alert('Please enter Y for Yes or N for No.');
        return;
    }

    var num = prompt('Include numbers? (Y/N)');
    num = num.toUpperCase();

    if (num !== 'Y' && num !== 'N') {
        alert('Please enter Y for Yes or N for No.');
        return;
    }

    var specChar = prompt('Include special characters? (Y/N)');
    specChar = specChar.toUpperCase();

    if (specChar !== 'Y' && specChar !== 'N') {
        alert('Please enter Y for Yes or N for No.');
        return;
    }

    // Generate and display the random password
    const generatedPassword = generateRandomPassword(numChar);

    passwordText.value = generatedPassword;
});
 