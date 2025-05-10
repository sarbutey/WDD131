// getdates.js

// Set the current year in the footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// Set the last modified date in the footer
const modifiedSpan = document.getElementById("lastModified");
if (modifiedSpan) {
  modifiedSpan.textContent = document.lastModified;
}



