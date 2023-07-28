document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".main");
  const header = document.querySelector(".header");
  const wrapper = document.querySelector(".wrapper");

  class Slider {
    constructor(owlElement, owlOptions) {
      this.owlElement = owlElement;
      this.owlOptions = owlOptions;
    }

    addSlider(owlElement, owlOptions) {
      $(owlElement).owlCarousel(owlOptions);
    }
  }

  const aboutPageSlider = new Slider();

  if (wrapper.classList.contains("about-page")) {
    aboutPageSlider.addSlider(".development__slider", {
      items: 2,
      margin: 40,
    });
  }
});
