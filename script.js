document.addEventListener('DOMContentLoaded', () => {
    // Login Functionality
    const loginForm = document.querySelector('form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const rollNumberInput = document.getElementById('txt-input');
            const rollNumber = rollNumberInput ? rollNumberInput.value.trim() : null;

            console.log('Form submission detected');
            console.log('Roll Number:', rollNumber);

            if (rollNumber) {
                if (isValidRollNumber(rollNumber)) {
                    alert(`Welcome, Roll Number: ${rollNumber}`);
                    console.log('Redirecting to home.html');
                    window.location.href = "home.html";
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

    // QR Code Functionality (Now inside the same listener)
    const qrCodeImg = document.getElementById('qr-code-img');
    if (qrCodeImg) {
        qrCodeImg.src = 'INDIAN FOOD.jpg'; // Corrected path (no need for path/to/your/)
        qrCodeImg.alt = "QR Code"; // Add alt text for accessibility
    }
});

// Basic roll number validation function (customize as needed)
function isValidRollNumber(rollNumber) {
    return rollNumber !== "" && /^[a-zA-Z0-9]+$/.test(rollNumber);
}
