// Login Functionality
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Handle login form submission
    loginForm?.addEventListener('submit', event => {
        event.preventDefault();
        const rollNumber = document.getElementById('roll-number').value.trim();

        if (rollNumber) {
            alert(`Welcome, Roll Number: ${rollNumber}`);
            // Redirect to the menu page
            window.location.href = "home.html";
        } else {
            alert('Please enter a valid roll number.');
        }
    });
});


// QR Code Handling
document.addEventListener('DOMContentLoaded', () => {
    const qrCodeImg = document.getElementById('qr-code-img');
    if (qrCodeImg) {
        qrCodeImg.src = 'path/to/your/qr-code.png'; // Replace with actual QR code path
    }
});
