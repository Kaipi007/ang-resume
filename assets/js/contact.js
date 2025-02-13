'use strict';

// Initialize EmailJS with your user ID
emailjs.init("-cumSpRfd2AnvkYe8"); // Replace with your EmailJS User ID

// Select the form and its inputs
const form = document.querySelector('[data-form]');
const inputs = document.querySelectorAll('[data-form-input]');
const button = document.querySelector('[data-form-btn]');

// Function to check if all inputs are filled
function checkInputs() {
    let allFilled = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });
    button.disabled = !allFilled; // Enable button if all inputs are filled
}

// Event listener for input changes to check if the button should be enabled
inputs.forEach(input => {
    input.addEventListener('input', checkInputs);
});

// Function to handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from inputs
    const fullname = form.elements['fullname'].value; // Accessing the input by name
    const email = form.elements['email'].value;       // Accessing the input by name
    const message = form.elements['message'].value;   // Accessing the textarea by name

    // Debugging output
    console.log('Full name:', fullname);
    console.log('Email:', email);
    console.log('Message:', message);

    // Use EmailJS to send the email
    emailjs.send("service_kjbaojf", "template_p23vbdo", {
        to_name: "ahxuan0914@gmail.com",
        from_name: fullname, 
        email:email,
        message: message 
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
        checkInputs(); // Recheck to disable the button again
        alert('Message sent successfully!'); 
    }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.'); // Optional error message
    });
});
