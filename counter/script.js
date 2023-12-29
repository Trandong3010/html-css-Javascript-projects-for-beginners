let count = 0;
const countElement = document.getElementById("count");
function onIncrease() {
  count += 1;
  countElement.textContent = count;
}

function onReset() {
  count = 0;
  countElement.textContent = count;
}

function onDecrease() {
  if (count > 0) {
    count -= 1;
    countElement.textContent = count;
  }
}
