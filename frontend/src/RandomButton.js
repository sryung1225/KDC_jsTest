class RandomButton {
  constructor({ $target, onRandomSearch }) {
    const $randomButton = document.createElement("button");
    this.$randomButton = $randomButton;
    this.$randomButton.className = "RandomButton";
    this.$randomButton.textContent = "🔀";

    $target.appendChild($randomButton);

    $randomButton.addEventListener("click", (e) => {
      onRandomSearch();
    });
  }
  render() {}
}
