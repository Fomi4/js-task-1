// Write a program that asks user to enter any number. If the number is less than 100, ask him to do it again.

let number = prompt("Enter the number 100", "");

if (number == 100) {
  alert("Congrats");
} else if (number == "" || number == null) {
  alert("Cancel");
} else {
  let numberLess = prompt("Enter another number", "");

  if (numberLess == 100) {
    alert("Congrats");
  } else {
    alert("Looser!");
  }
}