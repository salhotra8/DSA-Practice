function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > -1; j--) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
            console.log(arr)
        }
    }
    return arr
}

const result = insertionSort([1, 5, 34, 23, 8, 4, 45, 10]);

console.log(result);

// Time Complexity: O(n2)
// Space Complexity: O(1)