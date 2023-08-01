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

  if (wrapper.classList.contains("about-page")) {
    aboutPageSlider.addSlider(".development__slider", {
      items: 2,
      margin: 40,
    });
  }

  if (wrapper.classList.contains("career-page")) {
    careerPageSlider.addSlider(".vacancy__slider", {
      items: 1,
    });
  }

  if (wrapper.classList.contains("career-page")) {
    galleryPageSlider.addSlider(".gallery__slider", {
      items: 1,
    });
  }

  function openModal() {
    const formBtn = document.querySelectorAll(".vacancy__item");
    const modalForm = document.querySelector(".modal");
    const modalClose = document.querySelectorAll(".modal__close");

    formBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalForm.style.display = "block";
      });
    });

    modalClose.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalForm.style.display = "none";
      });
    });
  }

  openModal();

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
  openImg();

  function toggleSliderText() {
    const checkbox = document.getElementById("read-more-checker");
    const sliderUpIcon = document.querySelector(".slider-up");
    const sliderDownIcon = document.querySelector(".slider-down");

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        sliderUpIcon.style.display = "block";
        sliderDownIcon.style.display = "none";
      } else {
        sliderUpIcon.style.display = "none";
        sliderDownIcon.style.display = "block";
      }
    });
  }

  toggleSliderText();
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
