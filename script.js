A = 0;
B = 0;
C = 0;
sum = 100;

A = +prompt("Enter A", 123);

if (isNaN(A) || A <= 0) {
  alert(`A = ${A} - is not valid number`);
} else {
  alert(`A = ${A} - is valid number`);
  sum += A;
  alert(`Sum = ${sum}`);
}

B = +prompt("Enter B", 123);

if (isNaN(B) || B <= 0) {
  alert(`B = ${B} - is not valid number`);
} else {
  alert(`B = ${B} - is valid number`);
  sum += B;
  alert(`Sum = ${sum}`);
}

C = +prompt("Enter C", 123);

if (isNaN(C) || C <= 0) {
  alert(`C = ${C} - is not valid number`);
} else {
  alert(`C = ${C} - is valid number`);
  sum += C;
  alert(`Sum = ${sum}`);
}

alert(`Sum = ${sum}, A = ${A}, B = ${B}, C=${C}`);
