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
function addToCart(item, price) {
    // Get cart items from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add new item to the cart
    cart.push({ item: item, price: price });

    // Save cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show pop-up window
    document.getElementById('popup-message').innerText = item + " added to cart!";
    document.getElementById('popup').style.display = 'block';

    // Automatically close the pop-up after a few seconds (optional)
    setTimeout(closePopup, 2000);
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cart-items');

    // Clear the cart items div
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let ul = document.createElement('ul');
        cart.forEach(function(cartItem) {
            let li = document.createElement('li');
            li.innerHTML = `<h3>${cartItem.item}</h3><p>Price: ${cartItem.price}rs/-</p>`;
            ul.appendChild(li);
        });
        cartItemsDiv.appendChild(ul);
    }
}

function checkout() {
    // Logic for checkout (not implemented in this example)
    alert('Proceeding to checkout...');
}
