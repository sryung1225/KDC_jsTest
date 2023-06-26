const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandomSearch }) {
    const $wrapper = document.createElement("section");
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $wrapper.appendChild($searchInput);
    $target.appendChild($wrapper);

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    const $randomButton = document.createElement("button");
    this.$randomButton = $randomButton;
    this.$randomButton.className = "RandomButton";
    this.$randomButton.textContent = "🔀";

    $wrapper.appendChild($randomButton);

    $randomButton.addEventListener("click", (e) => {
      onRandomSearch();
    });
  }
  render() {}
}
