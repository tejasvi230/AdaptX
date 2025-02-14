document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save user preference in local storage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

// Load user preference on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
