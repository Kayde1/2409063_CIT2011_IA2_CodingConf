
// Registration Form Validation
document.addEventListener("DOMContentLoaded", function() {

    // Select the registration form
    const registrationForm = document.getElementById("registrationForm");

    // Handle form submission
    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get the user's information
        const fullname = document.getElementById("fullName");
        const email = document.getElementById("email");
        const github = document.getElementById("github");
        const avatar = document.getElementById("avatar");

        // Check full name
        if (fullname.value.trim() === "") {
            alert("Please enter your full name.");
            fullname.focus();
            return;
        }

        // Check email address
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email.value)) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }

        // Check GitHub username
        if (!github.value.startsWith("@")) {
            alert("Your GitHub username must start with @.");
            github.focus();
            return;
        }

        // Check profile picture
        if (avatar.files.length === 0) {
            alert("Please upload a profile picture.");
            avatar.focus();
            return;
        }

        // Get uploaded image
        const image = avatar.files[0];

        // Check image format
        if (image.type !== "image/jpeg" &&
            image.type !== "image/png") {
            alert("Please upload a JPG or PNG image.");
            avatar.focus();
            return;
        }

        // Check image size
        if (image.size > 500 * 1024) {
            alert("Image size must be below 500KB.");
            avatar.focus();
            return;
        }

        // Read the uploaded image
        const reader = new FileReader();

        reader.onload = function() {

            // Save registration information
            localStorage.setItem("ticketName", fullname.value);
            localStorage.setItem("ticketEmail", email.value);
            localStorage.setItem("ticketGithub", github.value);
            localStorage.setItem("ticketAvatar", reader.result);

            alert("Registration successful! Your ticket is being generated.");

            // Open the ticket page
            window.location.href = "ticket.html";
        };

        reader.readAsDataURL(image);

    });

});
