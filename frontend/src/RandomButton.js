class RandomButton {
  constructor({ $target, onRandomSearch }) {
    const $randomButton = document.createElement("button");
    this.$randomButton = $randomButton;

    $randomButton.className = "RandomButton";
    $randomButton.textContent = "🔀";
    $target.appendChild($randomButton);

    $randomButton.addEventListener("click", (e) => {
      onRandomSearch();
    });
  }

  render() {}
}

export default RandomButton;
