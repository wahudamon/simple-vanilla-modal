const container = document.getElementById("container");
const trigger = document.querySelector("[data-modal]");
const modal = document.getElementById(trigger.dataset.modal);
const buttons = document.querySelectorAll(".modal-footer__button");

document.addEventListener("keydown", (event) => {
  if ((event.keyCode || event.charCode) === 27) {
    modal.classList.remove("open");
    container.style.overflowY = "scroll";
  }
});

trigger.addEventListener("click", (event) => {
  event.preventDefault();

  modal.classList.add("open");

  container.style.overflowY = "hidden";

  const exits = modal.querySelectorAll(".modal-exit");

  exits.forEach((exit) => {
    exit.addEventListener("click", (event) => {
      event.preventDefault();
      modal.classList.remove("open");
      container.style.overflowY = "scroll";
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      modal.classList.remove("open");
    });
  });
});
