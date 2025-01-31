document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const tableBody = document.getElementById("tableBody");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page refresh

        // Get input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        const acceptedTerms = document.getElementById("terms").checked; // Returns true/false

        // Insert data into the table
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = email;
        row.insertCell(2).innerText = password;
        row.insertCell(3).innerText = dob;
        row.insertCell(4).innerText = acceptedTerms;

        // Clear the form after submission
        form.reset();
    });
});
