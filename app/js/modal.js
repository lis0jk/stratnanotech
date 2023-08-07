document.addEventListener("DOMContentLoaded", function () {
  function openModal() {
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("vacancy__button")) {
        const vacancyItem = event.target.closest(".vacancy__item");
        const modal = vacancyItem.querySelector(".vacancy__modal");

        if (modal) {
          modal.style.display = "block";

          const modalCloseBtn = modal.querySelector(".modal__close");
          if (modalCloseBtn) {
            modalCloseBtn.addEventListener("click", function () {
              modal.style.display = "none";
            });
          }
        }
      }
    });
  }
  openModal();
});
