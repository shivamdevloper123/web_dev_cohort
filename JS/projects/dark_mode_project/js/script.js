function loadHTML(selector, url) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
      if (selector === "#header") {
        loadHTML("#navbar-placeholder", "includes/navbar.html");
      }
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#header", "includes/header.html");
  loadHTML("#footer", "includes/footer.html");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
  updateThemeIcon();
});

function themeToggle() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  const isDark = document.body.classList.contains("dark");
  icon.src = isDark ? "images/sun.png" : "images/moon.png";
  icon.alt = isDark ? "Light Mode" : "Dark Mode";
}
