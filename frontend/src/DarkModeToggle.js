class DarkModeToggle {
  isDarkMode = null;

  constructor({ $target }) {
    const $darkModeToggle = document.createElement("input");
    this.$darkModeToggle = $darkModeToggle;
    this.$darkModeToggle.type = "checkbox";

    $darkModeToggle.className = "DarkModeToggle";
    $target.appendChild($darkModeToggle);

    $darkModeToggle.addEventListener("change", (e) => {
      this.setColorMode(e.target.checked);
    });

    this.initColorMode();
  }

  initColorMode() {
    // isDarkMode state, checkbox, html attr 상태 초기화
    this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.$darkModeToggle.checked = this.isDarkMode;
    this.setColorMode(this.isDarkMode);
  }

  setColorMode(isDarkMode) {
    document.documentElement.setAttribute(
      "color-mode",
      isDarkMode ? "dark" : "light"
    );
  }

  render() {}
}
