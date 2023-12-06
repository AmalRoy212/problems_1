// code accepted 
// leetcode bank (subsequnce of 1 to 7 in the week 1, week 2 = 2 to 8 )
function totalMoney(n) {

  let moneySaved = 0;
  let lengthOfDay = 0

  if(n <= 7){
    for (let i = 1; i <= n; i++) {
      moneySaved += i     
    }
    return moneySaved
  }

  for (let i = 0; i < Math.ceil(n / 7); i++) {
    lengthOfDay = i === Math.floor(n / 7) ? n - (7 * i) : 7;
    for (let j = 1; j <= lengthOfDay; j++) {
      moneySaved += (j + i);
    }
  }

  return moneySaved;
};

console.log(totalMoney(10));