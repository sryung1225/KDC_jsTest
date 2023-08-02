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
        onSearch(e.target.value, this.$limitCount.value);
        this.KeywordHistory.addKeyword(e.target.value);
      }
    });

    // 셀렉트 UI
    const $limitCount = document.createElement("select");
    this.$limitCount = $limitCount;
    this.$limitCount.classList = "LimitCount";

    const LimitCountOption = [10, 25, 50];
    LimitCountOption.map((option) => {
      let $option = document.createElement("option");
      $option.value = option;
      $option.textContent = `${option}개`;
      $limitCount.appendChild($option);
    });

    $wrapper.appendChild($limitCount);

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
