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
    // Define cart array
    const cart = [];

    // Redirect to cart page
    window.redirectToCart = function () {
        console.log("Redirecting to cart.html");
        window.location.href = "cart.html"; // Update with your actual cart page path
    };

    // Menu Items and Pricing
    const menuItems = {
        "Pani Puri": 30,
        "Dahi Puri": 30,
        "Bajji Mixture": 30,
        "Batani Chaat": 30,
        "Fried Chicken": 99,
        "French Fries": 40,
    };

    // Update price display based on selected menu item and quantity
    window.updatePrice = function () {
        const dropdown = document.getElementById('menu-items');
        const priceDisplay = document.getElementById('price');
        const quantityDisplay = document.getElementById('item-quantity');

        if (dropdown && priceDisplay && quantityDisplay) {
            const selectedItem = dropdown.value;
            const price = menuItems[selectedItem];
            const quantity = parseInt(quantityDisplay.innerText, 10);
            priceDisplay.innerText = `Price: ${price * quantity}rs`;
        }
    };

    // Increase quantity
    window.increaseQuantity = function (id) {
        const quantityElement = document.getElementById(id);
        let quantity = parseInt(quantityElement.innerText, 10);
        quantityElement.innerText = quantity + 1;
        updatePrice();
    };

    // Decrease quantity
    window.decreaseQuantity = function (id) {
        const quantityElement = document.getElementById(id);
        let quantity = parseInt(quantityElement.innerText, 10);
        if (quantity > 1) {
            quantityElement.innerText = quantity - 1;
            updatePrice();
        }
    };

    // Add selected item to the cart
    window.addItemToCart = function () {
        const dropdown = document.getElementById('menu-items');
        const quantityDisplay = document.getElementById('item-quantity');

        if (dropdown && quantityDisplay) {
            const selectedItem = dropdown.value;
            const price = menuItems[selectedItem];
            const quantity = parseInt(quantityDisplay.innerText, 10);

            for (let i = 0; i < quantity; i++) {
                cart.push({ item: selectedItem, price });
            }

            console.log(`Added ${quantity} x ${selectedItem} to the cart.`);
            alert(`${quantity} x ${selectedItem} added to the cart!`);
        } else {
            console.error("Menu items dropdown or quantity display not found.");
        }
    };

    // Example of viewing the cart (this can be implemented in the cart page)
    window.updateCart = function () {
        console.log("Cart Contents:", cart);
    };
});

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function checkout() {
        alert('Proceeding to checkout!');
        // Additional checkout logic here
    }

    // QR Code Handling
    const qrCodeImg = document.getElementById('qr-code-img');
    if (qrCodeImg) {
        qrCodeImg.src = 'path/to/your/qr-code.png'; // Replace with actual QR code path
    }
});
