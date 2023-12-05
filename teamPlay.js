//code accepted
function numberOfMatches (n) {
  let matches = 0;

  while (n > 1) {
    if (n % 2 === 0) {
      matches += n / 2;
      n /= 2;
    } else {
      matches += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    }
  }

  return matches;
};

console.log(numberOfMatches(7));
