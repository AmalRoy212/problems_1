// test passed
function largestGoodInteger(num){

  const length = num.length;
  const maxVals = []

  for(let i = 0; i < length; i++ ){
    if (num[i + 1] && num[i + 2]) {
      if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
        maxVals.push(num.slice(i, i + 3));
        i = i + 2;
      }
    }
  }

  if(maxVals.length){
    maxVals.sort();
    return maxVals[maxVals.length - 1];
  }
  return ""
}

const value = "42352338";

console.log(largestGoodInteger(value));