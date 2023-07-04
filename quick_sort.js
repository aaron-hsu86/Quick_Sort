// external function to modify array - not needed?
function swap (array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition (array, left, right) {
    let pivot = array[Math.floor(array.length/2)];
    while (left < right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        // swap(array, left, right); // thought I needed an external swap to adjust the array. Guess not?
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return left
}

function quickSort (array, low, high) {
    if (low < high) {
        let part = partition(array, low, high);
        quickSort(array, low, part-1);
        quickSort(array, part+1, high);
    }
}

let arr1 = [10, 7, 8, 9, 1, 5];
let arr2 = [100, 5, 3, 1, 2, 77];


quickSort(arr1, 0, arr1.length-1)
console.log(`Sorted Array: ${arr1}`)
quickSort(arr2, 0, arr2.length-1)
console.log(`Sorted Array: ${arr2}`)