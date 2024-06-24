/**
 * Quicksort algorithm. Best case O(n log(n)). Average case O(n log(n)). Worst case O(n^2). Space O(log(n)) _in-place_.
 * @description Picks a pivot element, partitions the array around the pivot, and recursively sorts the partitions. Its speed depends on the pivot you choose. Stable: no
 * @param {Array} arr array of numbers
 * @returns {Array} sorted array
 */
export default function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current < pivot) {
      left.push(current);
    } else if (current > pivot) {
      right.push(current);
    } else {
      equal.push(current);
    }
  }

  return [...quicksort(left), ...equal, ...quicksort(right)];
}
