document.addEventListener("DOMContentLoaded", function () {
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
  const careerPageSlider = new Slider();
  const galleryPageSlider = new Slider();
  const libraPageSlider = new Slider();

  if (wrapper.classList.contains("about-page")) {
    aboutPageSlider.addSlider(".development__slider", {
      responsive: {
        0: { items: 1, margin: 20 },
        1100: { items: 2, margin: 40 },
      },
    });
  }

  if (wrapper.classList.contains("career-page")) {
    careerPageSlider.addSlider(".vacancy__slider", {
      responsive: {
        0: { items: 1 },
        750: { items: 2, margin: 40 },
      },
    });
  }

  if (wrapper.classList.contains("career-page")) {
    galleryPageSlider.addSlider(".gallery__slider", {
      items: 1,
    });
  }

  if (wrapper.classList.contains("libra-page")) {
    libraPageSlider.addSlider(".libra-about__slider", {
      responsive: {
        0: { items: 1 },
        650: { items: 2, margin: 20 },
        1000: { items: 1 },
      },
    });
  }

  function openImg() {
    const galleryImages = document.querySelectorAll(".gallery__img");
    let enlargedImage = null;

    galleryImages.forEach((image) => {
      image.addEventListener("click", () => {
        if (enlargedImage) return;

        enlargedImage = document.createElement("div");
        enlargedImage.classList.add("enlarged-image");

        const closeButton = document.createElement("span");
        closeButton.classList.add("close-button");
        closeButton.innerHTML = "&times;";
        enlargedImage.appendChild(closeButton);

        const imageElement = document.createElement("img");
        imageElement.src = image.src;
        imageElement.alt = image.alt;
        enlargedImage.appendChild(imageElement);

        document.body.appendChild(enlargedImage);

        closeButton.addEventListener("click", () => {
          document.body.removeChild(enlargedImage);
          enlargedImage = null;
        });
      });
    });
  }
  if (wrapper.classList.contains("career-page")) {
    openImg();
  }

  function openArticle() {
    document.querySelectorAll(".read-more-button").forEach(function (button) {
      button.addEventListener("click", function (event) {
        const sliderText = event.currentTarget.nextElementSibling;
        const bottomElement = sliderText.querySelector(".bottom");

        sliderText.classList.toggle("slider-text-open");
        bottomElement.classList.toggle("hidden");

        const sliderDownIcon =
          event.currentTarget.querySelector(".slider-down");
        const sliderUpIcon = event.currentTarget.querySelector(".slider-up");
        sliderDownIcon.classList.toggle("hidden");
        sliderUpIcon.classList.toggle("hidden");
      });
    });
  }
  openArticle();

  function openDate() {
    document.querySelectorAll(".read-more").forEach(function (button) {
      button.addEventListener("click", function (event) {
        const sliderText = event.currentTarget.nextElementSibling;
        const bottomElement = sliderText.querySelector(".bottom");

        sliderText.classList.toggle("slider-text-open");
        bottomElement.classList.toggle("hidden");

        const sliderDownIcon = event.currentTarget.querySelector(
          ".development__slider-open"
        );
        const sliderUpIcon = event.currentTarget.querySelector(
          ".development__slider-close"
        );
        sliderDownIcon.classList.toggle("hidden");
        sliderUpIcon.classList.toggle("hidden");

        if (bottomElement.classList.contains("hidden")) {
          sliderBlock.style.height = "max-content";
        } else {
          sliderBlock.style.height = "100px";
        }
      });
    });
  }
  openDate();

  function checkSeries() {
    const categoryButtons = document.querySelectorAll(".equipment__role-btn ");
    const categoryBlock = document.querySelector(".equipment__role");

    let activeCategory = null;

    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const parentBlock = button.closest(".jlmf-section");
        const roleList = parentBlock.querySelector(".equipment__role-list");

        if (activeCategory !== null) {
          const prevParentBlock = activeCategory.closest(".jlmf-section");
          const prevRoleList = prevParentBlock.querySelector(
            ".equipment__role-list"
          );
          prevRoleList.style.display = "none";
        }

        if (activeCategory === button) {
          roleList.style.display = "none";
          activeCategory = null;
          if (window.innerWidth >= 640) {
            categoryBlock.style.marginBottom = "30px";
          }
        } else {
          roleList.style.display = "flex";
          activeCategory = button;
          if (window.innerWidth >= 640) {
            categoryBlock.style.marginBottom = "160px";
          }
        }
      });
    });
  }

  window.addEventListener("resize", () => {
    if (activeCategory !== null) {
      const categoryBlock = document.querySelector(".equipment__role");
      if (window.innerWidth < 640) {
        categoryBlock.style.marginBottom = "30px";
      } else {
        categoryBlock.style.marginBottom = "160px";
      }
    }
  });
  checkSeries();
});

if (typeof ymaps !== "undefined") {
  function init() {
    var coords1 = [55.749633, 37.537434];
    var coords2 = [53.90239, 27.639733];

    var map = new ymaps.Map("map", {
      center: [54.826308, 35.89043],
      zoom: 5,
    });

    var placemark1 = new ymaps.Placemark(
      coords1,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "/images/icon/map.svg",
        iconImageSize: [42, 60],
        iconImageOffset: [0, 0],
      }
    );
    map.geoObjects.add(placemark1);

    var placemark2 = new ymaps.Placemark(
      coords2,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "/images/icon/map.svg",
        iconImageSize: [42, 60],
        iconImageOffset: [0, 0],
      }
    );
    map.geoObjects.add(placemark2);

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
    // map.geoObjects.add(placemark);
  }
  ymaps.ready(init);
}
