document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".custom-dropdown");
  const selected = dropdown.querySelector(".selected");

  selected.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });
});
