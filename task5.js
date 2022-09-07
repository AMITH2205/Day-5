let words = "malayalam";
let newwords = words.split("").reverse("").join("");
if (newwords == words) {
  console.log("It is palindrome");
} else {
  console.log("Not a palindrome");
}
