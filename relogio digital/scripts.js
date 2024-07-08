let hour = document.querySelector("#hour")
let min = document.querySelector("#min")
let sec = document.querySelector("#sec")

setInterval(() => {
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hour.innerText =`${formatTime(hours)}`;
    min.innerText =`${formatTime(minutes)}`;
    sec.innerText =`${formatTime(seconds)}`;
})

function formatTime(time){
    return time < 10 ? "0" + time : time;
}