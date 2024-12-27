// Login Functionality
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm?.addEventListener('submit', event => {
        event.preventDefault();
        const rollNumber = document.getElementById('roll-number').value.trim();

        if (rollNumber) {
            alert(`Welcome, Roll Number: ${rollNumber}`);
            window.location.href = "menu.html";
        } else {
            alert('Please enter a valid roll number.');
        }
    });
});

// Menu Details
const menuItems = {
    "Pani Puri": 30,
    "Dahi Puri": 30,
    "Bajji Mixture": 30,
    "Batani Chaat": 30,
    "Fried Chicken": 99,
    "French Fries": 40
};

function updateDetails() {
    const dropdown = document.getElementById("menu-dropdown");
    const selectedItem = dropdown.value;
    const price = menuItems[selectedItem];

    document.getElementById("item-name").textContent = selectedItem;
    document.getElementById("item-price").textContent = `Price: ${price}rs/-`;
    document.getElementById("quantity").innerText = 1;
}

// Cart Functionality
function increaseQuantity(id) {
    const quantityElement = document.getElementById(id);
    let quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = quantity + 1;
}

function decreaseQuantity(id) {
    const quantityElement = document.getElementById(id);
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
        quantityElement.innerText = quantity - 1;
    }
}

function addToCart(item, price, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(cartItem => cartItem.item === item);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ item, price, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('popup-message').innerText = `${quantity} x ${item} added to cart!`;
    document.getElementById('popup').style.display = 'block';
    setTimeout(closePopup, 2000);
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Display Cart Functionality
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cart-items');

    // Clear the cart items div
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let ul = document.createElement('ul');
        cart.forEach(cartItem => {
            let li = document.createElement('li');
            li.innerHTML = `<h3>${cartItem.item}</h3><p>Quantity: ${cartItem.quantity}</p><p>Total Price: ${cartItem.price * cartItem.quantity}rs/-</p>`;
            ul.appendChild(li);
        });
        cartItemsDiv.appendChild(ul);
    }
}

// Checkout Functionality
function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some items first.');
    } else {
        alert('Proceeding to checkout!');
        // Clear cart after checkout
        localStorage.removeItem('cart');
        window.location.href = "checkout.html"; // Redirect to a checkout page
    }
}

// QR Code Handling
document.addEventListener('DOMContentLoaded', () => {
    const qrCodeImg = document.getElementById('qr-code-img');
    if (qrCodeImg) {
        qrCodeImg.src = 'path/to/your/qr-code.png'; // Replace with actual QR code path
    }
});

// Redirect to Cart Page
function redirectToCart() {
    window.location.href = "cart.html";
}
