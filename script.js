/*document.addEventListener('DOMContentLoaded', () => {
    // Login Functionality
    const loginForm = document.querySelector('form'); // Select the form element

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const rollNumberInput = document.getElementById('txt-input'); // Correct ID
            const rollNumber = rollNumberInput ? rollNumberInput.value.trim() : null;

            // Debugging output (optional)
            console.log('Form submission detected');
            console.log('Roll Number:', rollNumber);

            if (rollNumber) {
                // Basic validation (you can add more robust validation here)
                if (isValidRollNumber(rollNumber)) {
                    alert(`Welcome, Roll Number: ${rollNumber}`);
                    console.log('Redirecting to home.html');
                    window.location.href = "home.html"; // Redirect
                } else {
                    alert('Please enter a valid roll number.');
                }
            } else {
                alert('Please enter your roll number.');
            }
        });
    } else {
        console.error('Login form not found in the DOM.');
    }
});

// Basic roll number validation function (customize as needed)
function isValidRollNumber(rollNumber) {
    // Example: Check if it's not empty and contains only alphanumeric characters
    return rollNumber !== "" && /^[a-zA-Z0-9]+$/.test(rollNumber);
}
*/
    const qrCodeImg = document.getElementById('qr-code-img');
    if (qrCodeImg) {
        qrCodeImg.src = 'path/to/your/qr-code.png'; // Replace with actual QR code path
    }
});
