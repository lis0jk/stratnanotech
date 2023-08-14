document.addEventListener("DOMContentLoaded", function () {
  var vacancyItems = document.querySelectorAll(".vacancy__item");
  var modals = document.querySelectorAll(".modal");
  var vacancyContainers = document.querySelectorAll(".vacancy__slider-item");

  vacancyItems.forEach(function (vacancyItem) {
    vacancyItem.addEventListener("click", function () {
      var modalId = this.getAttribute("data-modal-id");
      var modal = document.querySelector(`.modal[data-modal-id="${modalId}"]`);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  vacancyContainers.forEach(function (vacancyContainer) {
    vacancyContainer.addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
      }
    });
  });

  var modalCloses = document.querySelectorAll(".modal__close");
  modalCloses.forEach(function (modalClose) {
    modalClose.addEventListener("click", function () {
      var modal = this.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });
});
