class Empty {
  $empty = null;
  data = null;

  constructor({ $target }) {
    const $empty = document.createElement("div");
    this.$empty = $empty;
    this.$empty.className = "Empty";

    $target.appendChild(this.$empty);

    this.data = {
      visible: true,
    };
    this.render();
  }

  show(isEmpty) {
    this.setState({
      visible: isEmpty,
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      this.$empty.style.display = "block";
      this.$empty.innerHTML = `
        <p>😥결과가 없습니다😥</p>
      `;
    } else {
      this.$empty.style.display = "none";
      this.$empty.innerHTML = ``;
    }
  }
}

export default Empty;
