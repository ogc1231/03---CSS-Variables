const inputs = document.querySelectorAll(`.controls input`);

function changeInputs() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("input", changeInputs));
// inputs.forEach((input) => input.addEventListener("mouseover", changeInputs));
