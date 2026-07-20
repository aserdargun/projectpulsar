const root = document.documentElement;
const themeButton = document.querySelector("[data-theme-toggle]");
const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-navigation]");

const updateThemeButton = () => {
  if (!themeButton) return;
  const dark = root.dataset.theme === "dark";
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.dataset.activeTheme = dark ? "dark" : "light";
};

themeButton?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("pulsar-theme", next);
  updateThemeButton();
});

menuButton?.addEventListener("click", () => {
  if (!navigation) return;
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navigation.toggleAttribute("data-open", !open);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.removeAttribute("data-open");
  });
});

updateThemeButton();
