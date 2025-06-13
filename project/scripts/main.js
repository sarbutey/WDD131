// Responsive menu toggle for #menu-toggle and #main-nav
document.addEventListener("DOMContentLoaded", () => {
  // Responsive menu
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

  // Theme toggle with localStorage
  const themeToggle = document.getElementById("theme-toggle");
  // Restore theme on load
  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme") ? "dark" : "light"
      );
    });
  }

  // Filter events function
  window.filterEvents = function (category) {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  };

  // Open modal function
  window.openModal = function (eventName) {
    const modal = document.getElementById('eventModal');
    const eventNameSpan = document.getElementById('modalEventName');
    const regEvent = document.getElementById('regEvent');
    const regSuccess = document.getElementById('regSuccess');
    const regForm = document.getElementById('eventRegistrationForm');
    if (eventNameSpan) eventNameSpan.textContent = eventName;
    if (regEvent) regEvent.value = eventName;
    if (modal) modal.style.display = 'flex';
    if (regSuccess) regSuccess.style.display = 'none';
    if (regForm) regForm.reset();
  };

  // Close modal
  const closeModalBtn = document.getElementById('closeModal');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function () {
      const modal = document.getElementById('eventModal');
      if (modal) modal.style.display = 'none';
    });
  }
  window.onclick = function (event) {
    const modal = document.getElementById('eventModal');
    if (modal && event.target === modal) {
      modal.style.display = 'none';
    }
  };

  // Handle registration form submission
  const regForm = document.getElementById('eventRegistrationForm');
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const regSuccess = document.getElementById('regSuccess');
      if (regSuccess) regSuccess.style.display = 'block';
      setTimeout(() => {
        const modal = document.getElementById('eventModal');
        if (modal) modal.style.display = 'none';
      }, 1800);
      this.reset();
    });
  }

  // Countdown timer for next event
  const countdown = document.getElementById("countdown");
  if (countdown) {
    const eventDate = new Date("2025-06-20T09:00:00");
    setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        countdown.textContent = `${days}d ${hours}h ${mins}m`;
      } else {
        countdown.textContent = "Event is live!";
      }
    }, 1000);
  }
});

// Optional: Button actions for other pages
function joinNow() {
  alert("Thanks for your interest! Please visit the Join section to become a member.");
}
function learnMore() {
  alert("We promote eco-friendly gardening and community collaboration. Join us!");
}