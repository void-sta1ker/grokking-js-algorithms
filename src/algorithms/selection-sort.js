function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];

    if (current < smallest) {
      smallest = current;
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

/**
 * Selection sort. Best case O(n^2). Average case O(n^2). Worst case O(n^2). Space O(1) _in-place_ or O(n).
 * @description Selects the minimum element from the unsorted part and swaps it with the first unsorted element. Stable: no
 * @param {Array} arr array of numbers
 * @returns {Array} sorted array
 */
function selectionSort(arr) {
  const newArr = [];

  const arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    const smallest = findSmallest(arr);

    newArr.push(arr.splice(smallest, 1)[0]);
  }

  return newArr;
}

module.exports = selectionSort;
