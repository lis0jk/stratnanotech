document.addEventListener("DOMContentLoaded", function () {
  const vacancyItems = document.querySelectorAll(".vacancy__item");

  vacancyItems.forEach(function (vacancyItem) {
    vacancyItem.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal-id");
      const modal = document.querySelector(
        `.modal[data-modal-id="${modalId}"]`
      );
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  const modalCloses = document.querySelectorAll(".modal__close");
  modalCloses.forEach(function (modalClose) {
    modalClose.addEventListener("click", function () {
      const modal = this.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });
});
