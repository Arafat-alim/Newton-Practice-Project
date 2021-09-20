function display(val) {
  document.getElementById("textarea").value += val;
}

function calc() {
  let inputVal = document.getElementById("textarea").value;
  let ans = eval(inputVal);
  document.getElementById("textarea").value = ans;
}

function clr() {
  document.getElementById("textarea").value = "";
}
