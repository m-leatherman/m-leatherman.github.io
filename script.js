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
});
