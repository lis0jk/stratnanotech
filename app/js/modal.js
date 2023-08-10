$(document).ready(function () {
  $(".vacancy__item").click(function () {
    const modalId = $(this).data("modal-id");
    $(`#modal${modalId}`).fadeIn();
  });

  $(".vacancy").click(function (e) {
    if (e.target === this) {
      $(this).fadeOut();
    }
  });

  $(".modal__close").click(function () {
    $(this).closest(".modal").fadeOut();
  });
});
