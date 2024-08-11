function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivot = arr[0]
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i])
        }
        else {
            rightArr.push(arr[i])
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}


const result = quickSort([1, 5, 34, 23, 8, 4, 45, 10])

console.log('QuickSort', result)

// Time Complexity: O(nlog2(n)) on average, O(n2) for worst case
// Space Complexity: O(log2(n))