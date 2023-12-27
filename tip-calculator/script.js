function onCalculate() {
  const totalValue = document.getElementById("totalValue");
  if (totalValue) return;

  const billAmount = document.getElementById("billAmount").value;
  const tipPercentage = document.getElementById("tipPercentage").value;
  const tipAmount = document.getElementById("tipAmount").value;

  if (!billAmount) {
    alert("Please, enter bill amount");
    return;
  }
  if (!tipPercentage) {
    alert("Please, enter tip percentage");
    return;
  }
  if (!tipAmount) {
    alert("Please, enter tip Amount");
    return;
  }

  const total =
    parseInt(billAmount) + parseInt(tipPercentage) + parseInt(tipAmount);
  let spanElement = document.createElement("span");
  spanElement.id = "totalValue";
  spanElement.className = "totalValue";
  spanElement.innerHTML = `${total}`;
  document.getElementById("total").appendChild(spanElement);
}
