function hasTargetSum(array, target) {
  const seen = new Set();

  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];
    if (seen.has(difference)) {
      return true;
    }
    seen.add(array[i]);
  }
  
  return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  function hasTargetSum(array, target)
    seen = empty set
    for each number num in array
        difference = target - num
        if difference is in seen
            return true
        add num to seen
    return false

*/

/*
  The time complexity of the hasTargetSum function is O(n), where n is the length of the input array. This is because the function performs a single pass through the input array, and each operation inside the loop (such as adding or checking for elements in the set) has a constant time complexity.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
