QUESTION: 1;
const countDigit = (n) => {
  if (n === 0) return 1;
// converting negative number to positive
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  //   console.log(count);
  return count;
};

let num = -34907329;
let result = countDigit(num);
console.log(result);
