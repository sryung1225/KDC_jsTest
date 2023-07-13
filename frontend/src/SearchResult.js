class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  onNextPage = null;

  constructor({ $target, initialData, onClick, onNextPage }) {
    const $wrapper = document.createElement("section");
    const $searchResult = document.createElement("ul");
    this.$searchResult = $searchResult;

    $searchResult.className = "SearchResult";
    $wrapper.appendChild(this.$searchResult);
    $target.appendChild($wrapper);

    this.data = initialData;
    this.onClick = onClick;
    this.onNextPage = onNextPage;
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  listObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        item.target.querySelector("img").src =
          item.target.querySelector("img").dataset.src;
        let dataIndex = Number(item.target.dataset.index);
        if (dataIndex + 1 === this.data.length) {
          this.onNextPage();
        }
      }
    });
  });

  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        (cat, index) => `
          <li class="item" data-index=${index}>
            <img src="https://via.placeholder.com/200x300" data-src=${cat.url} alt=${cat.name}/>
          </li>
        `
      )
      .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
      this.listObserver.observe($item);
    });
  }
}

export default SearchResult;
