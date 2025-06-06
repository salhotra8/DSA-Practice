/**
* @param {any[]} arr
*/
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i],
    j;
    for (j = i - 1; j > -1 && arr[j] > current; j--) {
      arr[j+1] = arr[j]
  }
  arr[j + 1] = current; 
  }
return arr
}

const result = insertionSort([1, 5, 34, 23, 8, 4, 45, 10]);

console.log(result);

// Time Complexity: O(n2)
// Space Complexity: O(1)
