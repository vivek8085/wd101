document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const tableBody = document.getElementById("tableBody");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page refresh

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const dob = document.getElementById("dob").value;
        const acceptedTerms = document.getElementById("terms").checked ? "true" : "false"; // Ensures true/false display

        if (!name || !email || !password || !dob) {
            alert("Please fill out all fields.");
            return;
        }

        // Insert data into the table
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>${dob}</td>
            <td>${acceptedTerms}</td>
        `;

        tableBody.appendChild(row);

        // Clear the form after submission
        form.reset();
    });
});
