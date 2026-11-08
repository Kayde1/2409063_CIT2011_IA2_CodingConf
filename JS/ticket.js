// Retrieve registration information
const name = localStorage.getItem("ticketName");
const email = localStorage.getItem("ticketEmail");
const github = localStorage.getItem("ticketGithub");

// Display greeting
document.getElementById("greetingName").textContent = name || "Guest";

// Display registration information
document.getElementById("ticketName").textContent = name || "Guest";

document.getElementById("ticketEmail").textContent = email || "";

const githubLink = document.getElementById("ticketGithub");
githubLink.textContent = github || "";
githubLink.href = github ? "https://github.com/" + github.replace("@", "") : "#";
