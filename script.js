// Change value of inputs
const inputs = document.querySelectorAll(`.controls input`);

function changeInputs() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("input", changeInputs));

// Set back to default on page refresh
window.addEventListener("DOMContentLoaded", init, false);

function init() {
  inputs.forEach((input) => (input.value = input.defaultValue));
}
