document.addEventListener("DOMContentLoaded", () => {
  // Responsive menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      this.setAttribute(
        "aria-label",
        nav.classList.contains("open") ? "Close navigation menu" : "Open navigation menu"
      );
    });
  }

  // Last modified date
  const lastMod = document.getElementById("lastModified");
  if (lastMod) lastMod.textContent = document.lastModified;

  // Handle join form submission
  const joinForm = document.getElementById("joinForm");
  if (joinForm) {
    joinForm.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("joinSuccess").style.display = "block";
      joinForm.reset();
    });
  }
});