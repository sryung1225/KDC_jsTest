class DarkModeToggle {
  isDarkMode = null;

  constructor({ $target }) {
    const $wrapper = document.createElement("section");
    const $darkModeToggle = document.createElement("input");
    this.$darkModeToggle = $darkModeToggle;

    $darkModeToggle.type = "checkbox";
    $darkModeToggle.className = "DarkModeToggle";
    $wrapper.appendChild($darkModeToggle);
    $target.appendChild($wrapper);

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

export default DarkModeToggle;
