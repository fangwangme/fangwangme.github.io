(function() {
  function applyThemeBasedOnTime() {
    const hour = new Date().getHours();
    // Example: Dark mode from 6 PM (18:00) to 6 AM (06:00)
    const isNight = hour >= 18 || hour < 6;
    document.documentElement.classList.toggle('dark-mode', isNight);
  }

  // Apply theme on initial load
  applyThemeBasedOnTime();

  // Update theme every minute
  setInterval(applyThemeBasedOnTime, 60 * 1000);
})();