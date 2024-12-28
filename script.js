document.addEventListener('DOMContentLoaded', () => {
    // Initial price mapping for items
    const itemPrices = {
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

    // Update price based on selected item
    window.updatePrice = function () {
        const selectedItem = dropdown.value;
        const price = itemPrices[selectedItem];
        const quantity = parseInt(quantityDisplay.innerText);
        priceDisplay.innerText = `Price: ${price * quantity}rs`;
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
        const price = itemPrices[selectedItem];
        const quantity = parseInt(quantityDisplay.innerText);

        addToCart(selectedItem, price, quantity);
    };
});
