// Theme initialization script - prevents flash of wrong theme
// This script must run before React hydration to avoid theme flash
(function() {
  try {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else if (!theme && window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {
    // Silently fail if localStorage is unavailable
  }
})();
