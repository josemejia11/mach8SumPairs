const inputNumbers = JSON.parse(process.argv[2]);
const targetSum = parseInt(process.argv[3]);

function checkSumPairs(optNumbers, target) {
  let sumPairs = [];
  let checkArray = new Set();
  for (let i = 0; i < optNumbers.length; i++) {
    let currentNum = optNumbers[i];
    if (checkArray.has(currentNum)) {
      sumPairs.push([currentNum, target - currentNum]);
    }
    checkArray.add(target - currentNum);
  }
  return sumPairs;
}

console.log(checkSumPairs(inputNumbers, targetSum))
