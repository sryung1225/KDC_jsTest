class KeywordHistory {
  $keywordHistory = null;
  data = null;

  constructor({ $target, onSearch }) {
    const $keywordHistory = document.createElement("ul");
    $keywordHistory.className = "KeywordHistory";
    this.$keywordHistory = $keywordHistory;
    $target.appendChild($keywordHistory);

    this.data = ["더미", "데이터", "아깽이", "cat"];
    this.onSearch = onSearch;

    this.render();
  }

  render() {
    this.$keywordHistory.innerHTML = this.data
      .map(
        (keyword) => `
          <li><button>${keyword}</button></li>
        `
      )
      .join("");

    this.$keywordHistory
      .querySelectorAll("li button")
      .forEach(($item, index) => {
        $item.addEventListener("click", () => {
          this.onSearch(this.data[index]);
        });
      });
  }
}
