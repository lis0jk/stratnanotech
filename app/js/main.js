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
    let enlargedImage = null; // Переменная для хранения ссылки на увеличенное изображение

    galleryImages.forEach((image) => {
      image.addEventListener("click", () => {
        if (enlargedImage) return; // Проверяем, что увеличенное изображение уже не открыто

        // Создаем элемент для увеличенной картинки
        enlargedImage = document.createElement("div");
        enlargedImage.classList.add("enlarged-image");

        // Создаем элемент для крестика и добавляем его в увеличенную картинку
        const closeButton = document.createElement("span");
        closeButton.classList.add("close-button");
        closeButton.innerHTML = "&times;";
        enlargedImage.appendChild(closeButton);

        // Создаем элемент для изображения и добавляем его в увеличенную картинку
        const imageElement = document.createElement("img");
        imageElement.src = image.src;
        imageElement.alt = image.alt;
        enlargedImage.appendChild(imageElement);

        // Добавляем элемент увеличенной картинки на страницу
        document.body.appendChild(enlargedImage);

        // Обработчик события для закрытия увеличенной картинки при клике на крестик
        closeButton.addEventListener("click", () => {
          document.body.removeChild(enlargedImage);
          enlargedImage = null; // Сбрасываем ссылку на увеличенное изображение, чтобы снова можно было открыть при клике на другое изображение
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

  function checkSeries() {
    const categoryButtons = document.querySelectorAll(".category__button");
    const categoryBlock = document.querySelector(".category__block");

    let activeCategory = null;

    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const parentBlock = button.closest(".category__block-item");
        const roleList = parentBlock.querySelector(".equipment__role-list");
        const downIcon = button.querySelector(".category__button-icon--down");
        const upIcon = button.querySelector(".category__button-icon--up");

        if (activeCategory !== null) {
          const prevParentBlock = activeCategory.closest(
            ".category__block-item"
          );
          const prevRoleList = prevParentBlock.querySelector(
            ".equipment__role-list"
          );
          const prevDownIcon = activeCategory.querySelector(
            ".category__button-icon--down"
          );
          const prevUpIcon = activeCategory.querySelector(
            ".category__button-icon--up"
          );
          prevRoleList.style.display = "none";
          prevDownIcon.style.display = "inline-block";
          prevUpIcon.style.display = "none";
        }

        if (activeCategory === button) {
          roleList.style.display = "none";
          downIcon.style.display = "inline-block";
          upIcon.style.display = "none";
          activeCategory = null;
          if (window.innerWidth >= 640) {
            categoryBlock.style.marginBottom = "30px";
          }
        } else {
          roleList.style.display = "flex";
          downIcon.style.display = "none";
          upIcon.style.display = "inline-block";
          activeCategory = button;
          if (window.innerWidth >= 640) {
            categoryBlock.style.marginBottom = "160px";
          }
        }
      });
    });
  }

  // Добавьте обработчик изменения размера окна для проверки ширины экрана.
  window.addEventListener("resize", () => {
    if (activeCategory !== null) {
      const categoryBlock = document.querySelector(".category__block");
      if (window.innerWidth < 640) {
        categoryBlock.style.marginBottom = "30px";
      } else {
        categoryBlock.style.marginBottom = "160px";
      }
    }
  });

  // Вызовите функцию checkSeries() при загрузке страницы или по необходимости.

  checkSeries();
});

if (typeof ymaps !== "undefined") {
  function init() {
    var coords1 = [55.749633, 37.537434];
    var coords2 = [53.90239, 27.639733];

    // Создание карты
    var map = new ymaps.Map("map", {
      center: [54.826308, 35.89043], // Центр карты (может быть любая другая точка по вашему выбору)
      zoom: 5, // Масштаб карты (число от 0 до 19)
    });

    // Добавление метки для первого места
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

    // Добавление метки для второго места
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
