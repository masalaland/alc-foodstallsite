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
                window.location.href = "home.html"; // Redirect to menu.html
            } else {
                alert('Please enter a valid roll number.');
            }
        });
    } else {
        console.error('Login form not found in the DOM.');
    }
document.addEventListener('DOMContentLoaded', () => {
    // Define cart array as a global variable
    const cart = [];

    /**
     * Redirect to cart page
     */
    window.redirectToCart = function () {
        if (cart.length === 0) {
            alert("Your cart is empty. Add items before proceeding.");
            return;
        }
        console.log("Redirecting to cart.html");
        window.location.href = "cart.html"; // Update with the correct cart page path
    };

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

    /**
     * Update price display based on selected menu item and quantity
     */
  
// ... rest of your JavaScript functions (increaseQuantity, decreaseQuantity) ...
    /**
     * Increase quantity
     
    // QR Code Handling
    const qrCodeImg = document.getElementById('qr-code-img');
    if (qrCodeImg) {
        qrCodeImg.src = 'path/to/your/qr-code.png'; // Replace with actual QR code path
    }
});
