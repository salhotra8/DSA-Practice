function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const result = bubbleSort([1, 5, 34, 23, 8, 4, 45, 10])


console.log(result);

// Time Complexity: O(n2)
// Space Complexity: O(1)