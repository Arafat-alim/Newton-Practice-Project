console.log("script Loaded");

let btn = document.getElementById("btn");
let text = document.getElementById("textarea");
text.addEventListener("keyup", function (e) {
  //   console.log(e.keyCode);
  if (e.keyCode === 13) {
    palindrom();
  }
});

btn.addEventListener("click", palindrom);

function palindrom() {
  let output = document.getElementById("result");
  let str = document.getElementById("textarea").value;
  if (str !== null && str !== undefined && str !== "") {
    //   convert string into array
    let strToArr = str.split("");
    //   reverse the array
    let reverseArr = strToArr.reverse();
    //   convert the array into a string;
    let reverseString = reverseArr.join("");
    if (str.toLowerCase() === reverseString.toLowerCase()) {
      console.log("It is a Palindrom");
      document.getElementById("textarea").value = "";
      output.innerText = `${str}, is a Palindrom`;
    } else {
      console.log("The given input String is not a Palindrom");
      document.getElementById("textarea").value = "";
      output.innerText = `${str}, is not a Palindrom`;
    }
  } else {
    alert("Input Box cant be an empty!");
  }
}
