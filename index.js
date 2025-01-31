document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const tableBody = document.getElementById("tableBody");

    // Load existing entries from localStorage
    function loadEntries() {
        const entries = JSON.parse(localStorage.getItem("entries")) || [];
        tableBody.innerHTML = ""; // Clear table before reloading

        entries.forEach(entry => {
            addEntryToTable(entry);
        });
    }

    // Add new row to table
    function addEntryToTable(entry) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.email}</td>
            <td>${entry.password}</td>
            <td>${entry.dob}</td>
            <td>${entry.acceptedTerms}</td>
        `;

        tableBody.appendChild(row);
    }

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page refresh

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const dob = document.getElementById("dob").value;
        const acceptedTerms = document.getElementById("terms").checked ? "true" : "false";

        // Validate age (18-55 years old)
        const birthDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--; // Adjust age if birthday hasn't occurred yet this year
        }

        if (age < 18 || age > 55) {
            alert("You must be between 18 and 55 years old.");
            return;
        }

        // Ensure all fields are filled
        if (!name || !email || !password || !dob) {
            alert("Please fill out all fields.");
            return;
        }

        // Save entry
        const newEntry = { name, email, password, dob, acceptedTerms };
        const entries = JSON.parse(localStorage.getItem("entries")) || [];
        entries.push(newEntry);
        localStorage.setItem("entries", JSON.stringify(entries));

        // Update table
        addEntryToTable(newEntry);

        // Clear the form after submission
        form.reset();
    });

    // Load previous entries on page load
    loadEntries();
});
