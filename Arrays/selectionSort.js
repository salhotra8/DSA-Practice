function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}


const result =  selectionSort([1, 5, 34, 23, 8, 4, 45, 10])

console.log('selectionSort',result)

// Time Complexity: O(n2)
// Space Complexity: O(1)