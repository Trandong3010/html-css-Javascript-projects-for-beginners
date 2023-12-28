function startTimer() {
  setInterval(() => {
    const current = new Date();
    document.getElementById("year").textContent = current.getFullYear();
    document.getElementById("days").textContent = current.getDate();
    document.getElementById("hours").textContent = current.getHours();
    document.getElementById("minutes").textContent = current.getMinutes();
    document.getElementById("seconds").textContent = current.getSeconds();
  }, 1000);
}

window.onload = function () {
  startTimer();
};