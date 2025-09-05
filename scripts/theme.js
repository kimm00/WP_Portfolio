//Remember themeState and cycle through the three themes
let themeState = 0;  // 0: light, 1: dark, 2: pastel

document.getElementById("theme-toggle").addEventListener("click", () => {
  const body = document.body;
  body.classList.remove("light-theme", "dark-theme", "pastel-theme");

  themeState = (themeState + 1) % 3;

  if (themeState === 0) {
    body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  } else if (themeState === 1) {
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.add("pastel-theme");
    localStorage.setItem("theme", "pastel");
  }
});

  