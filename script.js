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

    /**
     * Increase quantity
     */
    window.increaseQuantity = function (id) {
        const quantityElement = document.getElementById(id);
        let quantity = parseInt(quantityElement.innerText, 10);
        quantityElement.innerText = quantity + 1;
        updatePrice();
    };

    /**
     * Decrease quantity
     */
    window.decreaseQuantity = function (id) {
        const quantityElement = document.getElementById(id);
        let quantity = parseInt(quantityElement.innerText, 10);
        if (quantity > 1) {
            quantityElement.innerText = quantity - 1;
            updatePrice();
        }
    };

    /**
     * Add selected item to the cart
     */
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

    /**
     * Save cart to local storage for persistence
     */
    window.saveCart = function () {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    /**
     * Update cart display (For the cart page)
     */
    window.updateCartDisplay = function () {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const cartContainer = document.getElementById('cart-items');
        if (!cartContainer) {
            console.error("Cart container not found.");
            return;
        }

        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        cartContainer.innerHTML = cartItems
            .map(
                (cartItem, index) => `
                <div class="cart-item">
                    <span>${cartItem.item} - Rs. ${cartItem.price}</span>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `
            )
            .join('');
    };

    /**
     * Remove item from cart
     */
    window.removeFromCart = function (index) {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCartDisplay();
    };

    /**
     * Checkout functionality
     */
    window.checkout = function () {
        alert('Proceeding to checkout!');
        localStorage.removeItem('cart'); // Clear the cart after checkout
        window.location.href = "checkout.html"; // Redirect to checkout page
    };
});

/**
 * Update price display based on selected menu item and quantity
 */
window.updatePrice = function () {
    const dropdown = document.getElementById('menu-items'); // Dropdown for menu items
    const priceDisplay = document.getElementById('price');  // Price display element
    const quantityDisplay = document.getElementById('item-quantity'); // Quantity display element

    if (dropdown && priceDisplay && quantityDisplay) {
        const selectedItem = dropdown.value; // Get selected item name
        const price = menuItems[selectedItem]; // Retrieve price from menuItems
        const quantity = parseInt(quantityDisplay.innerText, 10); // Get current quantity
        priceDisplay.innerText = `Price: ${price * quantity}rs`; // Update price display
    } else {
        console.error("Dropdown, price display, or quantity display not found.");
    }
};

    // QR Code Handling
    const qrCodeImg = document.getElementById('qr-code-img');
    if (qrCodeImg) {
        qrCodeImg.src = 'path/to/your/qr-code.png'; // Replace with actual QR code path
    }
});
