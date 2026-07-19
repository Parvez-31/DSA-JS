const isPalindrome = (x) => {
  // for negative number
  //   if (x < 0) return false;

  let xcopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }

  //   console.log(rev);
  if (rev === xcopy) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(121));
// console.log(true);
