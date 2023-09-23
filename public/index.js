// index.js

// Function to handle user registration
function registerUser() {
    // Get user input (e.g., username and password)
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    // Store user data (in a real app, this would be sent to a server and stored in a database)
    localStorage.setItem(username, password);

    alert("Registration successful! You can now log in.");
}

// Function to handle user login
function loginUser() {
    // Get user input (e.g., username and password)
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    // Check if the entered username and password match (in a real app, this would involve server-side authentication)
    const storedPassword = localStorage.getItem(username);
    if (password === storedPassword) {
        alert("Login successful! Welcome, " + username + "!");
    } else {
        alert("Login failed. Please check your username and password.");
    }
}
// index.js

// Function to create a new dog listing
function createDogListing() {
    const dogName = prompt("Enter the dog's name:");
    const breed = prompt("Enter the breed:");
    const age = prompt("Enter the age:");
    const availability = prompt("Is the dog available for breeding? (Yes/No)");

    // Create a new listing element and add it to the page (you would handle data storage in a real app)
    const listing = document.createElement("div");
    listing.classList.add("dog-listing");
    listing.innerHTML = `
        <h3>${dogName}</h3>
        <p><strong>Breed:</strong> ${breed}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Availability:</strong> ${availability}</p>
        <button>Contact Owner</button>
    `;

    const dogListings = document.getElementById("dog-listings");
    dogListings.appendChild(listing);
}
// index.js

// Function to filter dog listings based on availability
function filterListings() {
    const availabilityFilter = document.getElementById("availability-filter").value;
    const dogListings = document.getElementsByClassName("dog-listing");

    for (const listing of dogListings) {
        const listingAvailability = listing.querySelector("p:nth-child(4)").textContent.split(": ")[1];
        if (availabilityFilter === "All" || listingAvailability === availabilityFilter) {
            listing.style.display = "block";
        } else {
            listing.style.display = "none";
        }
    }
}

// Attach an event listener to the filter button
const filterButton = document.getElementById("filter-button");
filterButton.addEventListener("click", filterListings);
