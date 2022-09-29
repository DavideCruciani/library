const addButton = document.querySelector(".add-button")
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")

/* BUTTON TO OPEN THE MODAL */

addButton.addEventListener("click", () => {
  overlay.classList.add("active");
  modal.classList.add("active");
})

/* BUTTON TO CLOSE THE MODAL */

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  modal.classList.remove("active");
})