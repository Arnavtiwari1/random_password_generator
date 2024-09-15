function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    const upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCharset = "abcdefghijklmnopqrstuvwxyz";
    const numberCharset = "0123456789";
    const symbolCharset = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    let charset = "";
    if (uppercase) charset += upperCharset;
    if (lowercase) charset += lowerCharset;
    if (numbers) charset += numberCharset;
    if (symbols) charset += symbolCharset;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').value = password;
    updateStrengthBar(password);
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

function updateStrengthBar(password) {
    const strengthBar = document.getElementById('strength-bar');
    let strength = 0;

    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 1;
    switch (strength) {
        case 1:
            strengthBar.style.width = '25%';
            strengthBar.style.backgroundColor = 'red';
            break;
        case 2:
            strengthBar.style.width = '50%';
            strengthBar.style.backgroundColor = 'orange';
            break;
        case 3:
            strengthBar.style.width = '75%';
            strengthBar.style.backgroundColor = 'yellow';
            break;
        case 4:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = 'green';
            break;
        default:
            strengthBar.style.width = '0%';
            break;
    }
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}
