// Wait until the HTML elements are fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Check if the Home page alert button exists
    const alertButton = document.getElementById("alertBtn");
    if (alertButton) {
        alertButton.addEventListener("click", function() {
            alert("Success! The JavaScript file is correctly linked and functioning.");
        });
    }

    // Check if the Contact page submit button exists
    const submitButton = document.getElementById("submitBtn");
    if (submitButton) {
        submitButton.addEventListener("click", function() {
            alert("Form submission simulated successfully!");
        });
    }

    // --- SHOPPING CART LOGIC ---
    let cartTotal = 0;
    const cartItemsList = document.getElementById("cartItems");
    const cartTotalDisplay = document.getElementById("cartTotal");
    const addButtons = document.querySelectorAll(".add-to-cart-btn");

    // Loop through every "Add to Cart" button
    addButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Get the name and price from the button's data attributes
            const itemName = this.getAttribute("data-name");
            const itemPrice = parseFloat(this.getAttribute("data-price"));

            // Add the price to the total
            cartTotal += itemPrice;

            // Create a new list item for the cart
            const newItem = document.createElement("li");
            newItem.textContent = itemName + " - $" + itemPrice.toFixed(2);
            
            // Put the item in the cart and update the total
            cartItemsList.appendChild(newItem);
            cartTotalDisplay.textContent = cartTotal.toFixed(2);
        });
    });

});
