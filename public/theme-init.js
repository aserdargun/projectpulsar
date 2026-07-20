(() => {
  const stored = localStorage.getItem("pulsar-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme =
    stored === "light" || stored === "dark"
      ? stored
      : systemDark
        ? "dark"
        : "light";
})();
