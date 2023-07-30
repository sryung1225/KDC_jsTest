import RandomButton from "./RandomButton.js";
import KeywordHistory from "./KeywordHistory.js";

const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandomSearch }) {
    const $wrapper = document.createElement("section");
    $wrapper.className = "SearchInputSection";
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;

    $searchInput.placeholder = "고양이를 검색해보세요.|";
    $searchInput.className = "SearchInput";
    $wrapper.appendChild($searchInput);
    $target.appendChild($wrapper);

    $searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        onSearch(e.target.value);
        this.KeywordHistory.addKeyword(e.target.value);
      }
    });

    this.RandomButton = new RandomButton({
      $target: $wrapper,
      onRandomSearch,
    });

    this.KeywordHistory = new KeywordHistory({
      $target: $wrapper,
      onSearch,
    });
  }
  render() {}
}

export default SearchInput;
