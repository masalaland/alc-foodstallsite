document.addEventListener('DOMContentLoaded', () => {
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
                window.location.href = "home.html"; // Redirect to home.html
            } else {
                alert('Please enter a valid roll number.');
            }
        });
    } else {
        console.error('Login form not found in the DOM.');
    }
});
