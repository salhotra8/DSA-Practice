//Works Only on Sorted Array

function BinarySearch(arr, number) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;
    while (firstIndex <= lastIndex) {
        let middle = Math.floor((firstIndex + lastIndex) / 2);
        if (arr[middle] === number) return middle;
        else if (arr[middle] > number) {
            lastIndex = middle - 1;
        } else {
            firstIndex = middle + 1;
        }
    }
    return -1
}


const result = BinarySearch([1, 2, 3, 4, 5, 6, 7], 8);

console.log(`Binary Search - Index = ${result}`);