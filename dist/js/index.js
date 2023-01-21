let humBtn = document.querySelector("#menu-btn");
let menu = document.querySelector("#menu");

humBtn.addEventListener('click', () => {
  humBtn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
})