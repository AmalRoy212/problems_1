// code accepted
function largestOddNumber (num) {
  let i = num.length - 1;
  while (i >= 0) {
    if (parseInt(num[i]) % 2 !== 0) {
      return num.substring(0, i + 1);
    }
    i--;
  }
  return "";
  // const length = num.length;
  // let maxOdd = "";
  // let flag = 0

  // if(length === 1) return num[0] % 2 === 1 ? num : ''

  // for (let i = 0; i < length;) {
  //   if(num[i] === 0) flag++
  //   if (num[i] % 2 === 1){
  //     for (var j = i + 1; j < length; j++) {
  //       if(num[j] % 2 === 1){
  //         maxOdd = j === i + 1 ? num[i] : maxOdd;
  //         maxOdd += num[j];
  //       }else{
  //         if(length === 2){
  //          return num[i] 
  //         }
  //         i = j;
  //         // j = length;
  //         // break;
  //       }
  //     }
  //     if(j === length && flag == 0) return maxOdd
  //   }else{
  //     i++ ;
  //     continue
  //   }
  // }
  // // if (num % 2 === 1) return num;
  // return maxOdd
};

console.log(largestOddNumber('100'));
// console.log('2' % 2);