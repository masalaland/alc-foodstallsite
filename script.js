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

// Cart Functionality
const cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }
    cartItems.innerHTML = cart
        .map(
            (cartItem, index) => `
                <div class="cart-item">
                    <span>${cartItem.item} - Rs. ${cartItem.price}</span>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `
        )
        .join('');
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
document.addEventListener('DOMContentLoaded', () => {
    const qrCodeImg = document.getElementById('qr-code-img');
    if (qrCodeImg) {
        qrCodeImg.src = 'path/to/your/qr-code.png'; // Replace with actual QR code path
    }
});
