(function () {
  const THEME_KEY = "site-theme";
  const DARK_CLASS = "dark-theme";

  function getTheme() {
    return localStorage.getItem(THEME_KEY) || "light";
  }

  function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    if (theme === "dark") {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }

  function toggleTheme() {
    const current = getTheme();
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
    updateToggleButton(next);
  }

  function updateToggleButton(theme) {
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;
    toggle.textContent = theme === "dark" ? "light" : "dark";
    toggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    const theme = getTheme();
    setTheme(theme);

    const toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", toggleTheme);
      updateToggleButton(theme);
    }
  });
})();
