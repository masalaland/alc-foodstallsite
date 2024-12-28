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
 // Menu Page Functionality
    const menuItems = {
        "Pani Puri": 30,
        "Dahi Puri": 30,
        "Bajji Mixture": 30,
        "Batani Chaat": 30,
        "Fried Chicken": 99,
        "French Fries": 40,
    };

    const dropdown = document.getElementById('menu-items');
    const priceDisplay = document.getElementById('price');
    const quantityDisplay = document.getElementById('item-quantity');

    if (dropdown && priceDisplay && quantityDisplay) {
        // Update price based on selected item
        window.updatePrice = function () {
            const selectedItem = dropdown.value;
            const price = menuItems[selectedItem];
            const quantity = parseInt(quantityDisplay.innerText);
            priceDisplay.innerText = Price: ${price * quantity}rs;
        };

        // Increase quantity and update price
        window.increaseQuantity = function (id) {
            const quantityElement = document.getElementById(id);
            let quantity = parseInt(quantityElement.innerText);
            quantityElement.innerText = quantity + 1;
            updatePrice();
        };

        // Decrease quantity and update price
        window.decreaseQuantity = function (id) {
            const quantityElement = document.getElementById(id);
            let quantity = parseInt(quantityElement.innerText);
            if (quantity > 1) {
                quantityElement.innerText = quantity - 1;
                updatePrice();
            }
        };

        // Add item to cart
        window.addItemToCart = function () {
            const selectedItem = dropdown.value;
            const price = menuItems[selectedItem];
            const quantity = parseInt(quantityDisplay.innerText);

            for (let i = 0; i < quantity; i++) {
                addToCart(selectedItem, price);
            }
        };
    }

    // Cart Functionality
    const cart = [];

    function addToCart(item, price) {
        cart.push({ item, price });
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        if (cartItems) {
            if (cart.length === 0) {
                cartItems.innerHTML = '<p>Your cart is empty.</p>';
                return;
            }
            cartItems.innerHTML = cart
                .map(
                    (cartItem, index) => 
                        <div class="cart-item">
                            <span>${cartItem.item} - Rs. ${cartItem.price}</span>
                            <button onclick="removeFromCart(${index})">Remove</button>
                        </div>
                    
                )
                .join('');
        }
    }

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
