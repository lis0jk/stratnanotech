document.addEventListener("DOMContentLoaded", function () {
  function openModal() {
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("vacancy__item-title")) {
        const vacancyItem = event.target.closest(".vacancy__item");
        const modal = vacancyItem.querySelector(".modal");

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
