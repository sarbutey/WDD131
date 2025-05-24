const temp = 10;
const windSpeed = 5;

function calculateWindChill(t, s) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

const windChillElem = document.getElementById("windchill");

if (temp <= 10 && windSpeed > 4.8) {
  windChillElem.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
} else {
  windChillElem.textContent = "N/A";
}

// Footer content
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
