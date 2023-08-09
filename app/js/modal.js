document.addEventListener("DOMContentLoaded", function () {
  function openModal() {
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("vacancy__item-down")) {
        const overlay = document.querySelector(".modal__overlay");
        const vacancyItem = event.target.closest(".vacancy__item");
        const modal = vacancyItem.querySelector(".modal");

        if (modal) {
          overlay.style.display = "block";
          modal.style.display = "block";

          const modalCloseBtn = modal.querySelector(".modal__close");
          if (modalCloseBtn) {
            modalCloseBtn.addEventListener("click", function () {
              modal.style.display = "none";
              overlay.style.display = "none";
            });
          }
        }
      }
    });
  }
  openModal();
});
