const inputs = document.querySelectorAll(`.controls input`);

function changeInputs() {
  console.log(inputs);
}

inputs.forEach((input) => input.addEventListener("input", changeInputs));
inputs.forEach((input) => input.addEventListener("mouseover", changeInputs));
