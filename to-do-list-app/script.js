let count = 0;
function onAddTask() {
  count = count + 1;
  var element = document.createElement("div");
  element.id = count;
  element.className = "task";
  element.innerHTML = `<p>${document.getElementById("input-task").value}</p>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick="onRemoveTask(${count})"
  >
    <path
      d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
      fill="#FF0000"
    />
  </svg>`;
  document.getElementById("tasks").appendChild(element);
}

function onRemoveTask(id) {
  const element = document.getElementById(id);
  document.getElementById("tasks").remove(element);
}
