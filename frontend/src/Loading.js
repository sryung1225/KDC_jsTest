class Loading {
  $loading = null;
  data = null;

  constructor({ $target }) {
    const $loading = document.createElement("div");
    this.$loading = $loading;

    $target.appendChild(this.$loading);

    this.data = {
      visible: false,
    };
    this.render();
  }

  show() {
    this.setState({
      visible: true,
    });
  }

  hide() {
    this.setState({
      visible: false,
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      this.$loading.innerHTML = `
        <div class="Loading">
          <p>🧐로딩🧐</p>
        </div>
      `;
    } else {
      this.$loading.innerHTML = ``;
    }
  }
}

export default Loading;
