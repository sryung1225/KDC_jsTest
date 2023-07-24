import api from "./api.js";

class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    this.$imageInfo = $imageInfo;

    $imageInfo.className = "ImageInfo";
    $target.appendChild($imageInfo);

    this.data = data;
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  async showDetail(data) {
    const detailInfo = await api.fetchCatDetail(data.cat.id);
    if (detailInfo) {
      this.setState({
        visible: true,
        cat: detailInfo.data,
      });
    }
  }

  closeImageInfo() {
    this.setState({
      visible: false,
      cat: undefined,
    });
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.cat;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      this.$imageInfo.style.display = "block";
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          this.closeImageInfo();
        }
      });
      this.$imageInfo.addEventListener("click", (e) => {
        if (
          e.target.className === "ImageInfo" ||
          e.target.className === "close"
        ) {
          this.closeImageInfo();
        }
      });
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}

export default ImageInfo;
