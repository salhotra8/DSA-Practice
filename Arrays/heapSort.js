function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}


// For desending order sort (builds a min-heap)
function minHeapify(arr, length, index) { 
    let smallestItemIndex = index; // Initialize smallest as root
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;

    // If left child exists and is SMALLER than current smallest
    if (leftChildIndex < length && arr[leftChildIndex] < arr[smallestItemIndex]) {
        smallestItemIndex = leftChildIndex;
    }

    // If right child exists and is SMALLER than current smallest
    if (rightChildIndex < length && arr[rightChildIndex] < arr[smallestItemIndex]) {
        smallestItemIndex = rightChildIndex;
    }

    // If the smallest is not the current root (index), swap and recurse
    if (smallestItemIndex !== index) {
        swap(arr, smallestItemIndex, index);

        // Recursively min-heapify the affected sub-tree starting from the new position
        minHeapify(arr, length, smallestItemIndex);
    }
}

// For ascending order sort (builds a max-heap)
function heapify(arr, index, length) {
    let largestItemIndex = index;
    let leftChildIndex = 2 * index + 1; 
    let rightChildIndex = 2 * index + 2;

    // If left child exists and is GREATER than current largest
    if (leftChildIndex < length && arr[leftChildIndex] > arr[largestItemIndex]) {
        largestItemIndex = leftChildIndex;
    }

    // If right child exists and is GREATER than current largest
    if (rightChildIndex < length && arr[rightChildIndex] > arr[largestItemIndex]) {
        largestItemIndex = rightChildIndex;
    }

    // If the largest is not the current root (index), swap and recurse
    if (largestItemIndex !== index) {
        swap(arr, largestItemIndex, index);

        // Recursively heapify the affected sub-tree starting from the new position of the swapped element
        heapify(arr, largestItemIndex, length);
    }
}

function heapSort(arr) {
    const n = arr.length;

    // Phase 1: Build a max-heap from the input array.
    // Start from the last non-leaf node and heapify upwards to the root.
    // The last non-leaf node is at index Math.floor(n / 2) - 1
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n); // 'n' is the full length for building the initial heap
    }

    // Phase 2: Extract elements one by one from the heap.
    // The largest element (at index 0) is swapped with the last element of the heap.
    // The heap size then reduces, and heapify is called on the new root.
    for (let i = n - 1; i > 0; i--) { // Loop from the last element down to the second element (index 1)
        swap(arr, 0, i); // Swap root (largest) with the current last element of the heap

        // Heapify the reduced heap.
        // The new heap size is 'i', and the new root is at index 0.
        heapify(arr, 0, i);
    }

    return arr; // This will sort in ASCENDING order
}

const unsortedArray = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", unsortedArray);
console.log("Sorted Array (Ascending):", heapSort(unsortedArray.slice())); // Use .slice() to avoid modifying original

const testArray2 = [4, 10, 3, 5, 1];
console.log("Original Array 2:", testArray2);
console.log("Sorted Array 2 (Ascending):", heapSort(testArray2.slice()));

const testArray3 = [1, 2, 3, 4, 5]; // Already sorted
console.log("Original Array 3:", testArray3);
console.log("Sorted Array 3 (Ascending):", heapSort(testArray3.slice()));

const testArray4 = [5, 4, 3, 2, 1]; // Reverse sorted
console.log("Original Array 4:", testArray4);
console.log("Sorted Array 4 (Ascending):", heapSort(testArray4.slice()));
