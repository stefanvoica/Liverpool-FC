document.addEventListener('DOMContentLoaded', function() {
    // Regular expression patterns for validation
    const namePattern = /^[a-zA-Z\s\-']+$/; // Allows letters, spaces, hyphens, and apostrophes
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Simple email validation pattern

    // Function to validate each input field against a pattern
    function validateInput(input, pattern) {
        return pattern.test(input);
    }

    // Event listener for form submission
    document.getElementById('fan_feedback_form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting to the server

        // Fetch values from form fields
        const fanName = document.getElementById('fan_name').value;
        const fanEmail = document.getElementById('fan_email').File;

        // Validate fan name
        if (!validateInput(fanName, namePattern)) {
            alert('Please enter a valid name.');
            return; // Stop further execution if validation fails
        }

        // Validate fan email
        if (!validateInput(fanEmail, emailPattern)) {
            alert('Please enter a valid email address.');
            return; // Stop further execution if validation fails
        }

        // If all validations pass
        alert('Form is valid and ready to be submitted!');
        // Here you might want to actually submit the form or handle it however required
    });
});
