const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const copyIcon = document.querySelector(".fa-copy");
const div = document.querySelector(".alert-container");

button.addEventListener("click", () => {
  randomizePassword();
});

copyIcon.addEventListener("click", () => {
  copyPassword();
  if (input.value) {
    div.classList.remove("active");
    setTimeout(() => {
      div.classList.add("active");
    }, 2000);
  }
});

function randomizePassword() {
  let randomstring = Math.random().toString(36).slice(-8);
  input.value = randomstring;
  div.innerText = randomstring + " Copied";
}

function copyPassword() {
  input.select();
  navigator.clipboard.writeText(input.value);
}
