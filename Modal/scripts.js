const btnOpen = document.querySelector("#open-modal")
const btnClose = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")


btnOpen.addEventListener('click', () => {
    modal.style.display = "flex";
})

btnClose.addEventListener('click', () => {
    modal.style.display = "none";
})