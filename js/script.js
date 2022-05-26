const modals = document.querySelectorAll("[data-modal]");
const buttons = document.querySelectorAll(".modal-footer__button");

modals.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();

    const modal = document.getElementById(trigger.dataset.modal);

    modal.classList.add("open");

    const exits = modal.querySelectorAll(".modal-exit");

    exits.forEach((exit) => {
      exit.addEventListener("click", (event) => {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });

    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        modal.classList.remove("open");
      });
    });
  });
});
