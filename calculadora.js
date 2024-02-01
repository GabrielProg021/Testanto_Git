const entrada1 = prompt("Enter the first number");
const entrada2 = prompt("Enter the second number");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const sum = x + y;
const subtraction = x - y;
const multiplication = x * y;
const division = x / y;

alert(
  "Results:\n" +
    "\nSum: " +
    sum +
    "\nSubtraction: " +
    subtraction +
    "\nMultiplication: " +
    multiplication +
    "\nDivision: " +
    division
);
