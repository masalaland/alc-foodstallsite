document.addEventListener('DOMContentLoaded', () => {
    // Login Functionality
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const rollNumberInput = document.getElementById('roll-number');
            const rollNumber = rollNumberInput ? rollNumberInput.value.trim() : null;

            // Debugging output
            console.log('Form submission detected');
            console.log('Roll Number:', rollNumber);

            if (rollNumber) {
                alert(`Welcome, Roll Number: ${rollNumber}`);
                console.log('Redirecting to home.html');
                window.location.href = "home.html"; // Redirect to home.html
            } else {
                alert('Please enter a valid roll number.');
            }
        });
    } else {
        console.error('Login form not found in the DOM.');
    }

    /**
     * Menu Items and Pricing
     */
    const menuItems = {
        "Pani Puri": 30,
        "Dahi Puri": 30,
        "Bajji Mixture": 30,
        "Batani Chaat": 30,
        "Fried Chicken": 99,
        "French Fries": 40,
    };


    const qrCodeImg = document.getElementById('qr-code-img');
    if (qrCodeImg) {
        qrCodeImg.src = 'path/to/your/qr-code.png'; // Replace with actual QR code path
    }
});
