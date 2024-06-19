/**
 * Binary search
 * @param {number[]} arr array of values
 * @param {number} target target value
 * @returns {number} index position of target or `-1` if not found
 */
export default function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guess = arr[mid];

    if (guess === target) {
      return mid;
    }

    if (guess < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

/*
Exercises:
1.1 log(128) = 7
1.2 log(256) = 8
*/
