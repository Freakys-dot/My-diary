// Check if a password is required
const password = "mypassword"; // Change this to whatever password you like!

// Function to check if the user is logged in
function checkPassword() {
  let userPassword = prompt("Please enter the password to access your diary:");
  if (userPassword !== password) {
    alert("Incorrect password!");
    window.location.href = "index.html"; // Redirect to homepage if password is wrong
  }
}

// Save a new diary entry
function saveEntry() {
  const entry = document.getElementById("diary-entry").value;
  if (entry.trim() === "") {
    alert("Please write something before saving.");
    return;
  }

  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.push(entry);
  localStorage.setItem("entries", JSON.stringify(entries));
  document.getElementById("diary-entry").value = ""; // Clear the textarea
  loadEntries(); // Reload the entries list
}

// Clear the current entry in the textarea
function clearEntry() {
  document.getElementById("diary-entry").value = "";
}

// Load and display previous diary entries
function loadEntries() {
  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  const entriesDiv = document.getElementById("entries");
  entriesDiv.innerHTML = ""; // Clear previous entries

  entries.forEach((entry, index) => {
    const entryDiv = document.createElement("div");
    entryDiv.innerHTML = `<p>${entry}</p>`;
    entriesDiv.appendChild(entryDiv);
  });
}

// Load entries on the diary page
if (window.location.pathname.endsWith("diary.html")) {
  loadEntries();
  checkPassword(); // Check password on entry page
}
