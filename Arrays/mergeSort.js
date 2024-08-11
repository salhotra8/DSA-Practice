function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let pivot = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, pivot);
  let rightArr = arr.slice(pivot);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let result = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      // console.log(leftArr, rightArr)
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  return [...result, ...leftArr, ...rightArr];
}

const result = mergeSort([1, 5, 34, 20, 8, 4, 45, 10]);

console.log("mergeSort", result);

// Time Complexity: O(nlog2(n))
// Space Complexity: O(n)
